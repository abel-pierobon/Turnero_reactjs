import { db } from "./db/datos";
import { getDocs, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { toast } from "sonner";
import VerDisponibles from "./VerDisponibles";


function Disponibles() {
    const [data, setData] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        const turnosCollection = collection(db, "turnos");

        const consulta = getDocs(turnosCollection);

        toast.promise(consulta, {
            loading: 'Cargando turnos',
            success: (resultado) => {
                const aux = resultado.docs.map((doc) => {
                    const turnos = doc.data()
                    turnos.id = doc.id
                    return turnos
                })
                setData(aux)
                return 'Turnos cargados correctamente';
            },
            error: (error) => {
                return "error en carga de Turnos"
            },
        });
    }, [id]);
    console.log(data)
    return (
        <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {data.length === 0 ? (
                    <div className='flex justify-center'>
                        <p className="font-bold texto-aparecer-desaparecer"> CARGANDO...</p>
                    </div>
                ) : (
                    data.map((item, i) => {
                        return <VerDisponibles key={i} turnos={item} />;
                    })
                )}                   
            </section>
    )
}
export default Disponibles