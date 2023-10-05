import React, { useState, useEffect, useContext } from 'react';
import { collection,     query, orderBy, onSnapshot, limit,deleteDoc,getDocs } from 'firebase/firestore';
import { db } from './db/datos';
import Call from './Call';
import CallEnd from './CallEnd';
import { ContextTurnero } from "./ContextTurnero";


function Vista() {
    const [data, setData] = useState([]);
    const [dataLlamado, setDataLlamado] = useState([]);
    const {reproducirSonido}= useContext(ContextTurnero);
    useEffect(() => {
        // Configura un listener para escuchar cambios en la colección "llamados"
        const llamadoCollection = collection(db, 'llamados');
        const q = query(llamadoCollection, orderBy('timestamp', 'desc'),limit(6));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const aux = querySnapshot.docs.map((doc) => {
            const turno = doc.data();
            turno.id = doc.id;
            return turno;
        });
        setData(aux);
        });

        return () => {
        // Cuando el componente se desmonta, deten el listener
        unsubscribe();
        };
    }, []);

    useEffect(() => {
        // Configura un listener para escuchar cambios en la colección "llamados"
        const llamadoCollection = collection(db, 'llamados');
        const qu = query(llamadoCollection, orderBy('timestamp', 'desc'),limit(1));

        const unsubscribe = onSnapshot(qu, (querySnapshot) => {
        const aux = querySnapshot.docs.map((doc) => {
            const turno = doc.data();
            turno.id = doc.id;
            return turno;
        });
        setDataLlamado(aux);
        reproducirSonido()
        });

        return () => {
        // Cuando el componente se desmonta, deten el listener
        unsubscribe();
        };
    }, []);

    const eliminarTodosLosLlamados = async () => {
        const llamadosCollection = collection(db, 'llamados');
        const llamadosQuery = query(llamadosCollection);
        const llamadosSnapshot = await getDocs(llamadosQuery);

        llamadosSnapshot.forEach(async (doc) => {
            await deleteDoc(doc.ref);
        });

        // Luego, actualiza el estado o realiza cualquier otra acción que desees.
        // Por ejemplo, puedes limpiar el estado de los llamados.
        setData([]);
    };

    return (
        <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
        <div className=''>
            {dataLlamado.length === 0 ? (
                <div className="flex justify-center">
                    <p className="font-bold texto-aparecer-desaparecer">No se ha llamado ningún turno</p>
                </div>
            ) : (
                dataLlamado.map((item2, i) => {
                    const esUltimo = item2.id === data[0]?.id; // Compara con el primer turno de "data"
                    return (
                        <CallEnd key={i} turno={item2} esUltimo={esUltimo} />
                    );
                })
            )}
        </div>
        <div>
            {data.length === 0 ? (
                <div className="flex justify-center">
                    <p className="font-bold texto-aparecer-desaparecer">Aguarde y será atendido</p>
                </div>
            ) : data.length === 1 ? (
                <p></p>
            ) : (
                data.map((item, i) => {
                    return <Call key={i} turno={item} />;
                })
            )}
        </div>
            <div className=''>
                {data.length === 0 ? (
                    <div className="flex justify-center">
                    <p></p>
                    </div>
                ) : (
                <button onClick={eliminarTodosLosLlamados} className="rounded-md border border-radius border-red-500 bg-red-500 text-white p-1 mt-2" >Limpiar Turnero</button>
                )}
            </div>
        </section>
    );
}

export default Vista;
