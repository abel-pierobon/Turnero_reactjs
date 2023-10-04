import React, { useState, useEffect } from 'react';
import { collection,     query, orderBy, onSnapshot, limit } from 'firebase/firestore';
import { db } from './db/datos';
import Call from './Call';
import CallEnd from './CallEnd';


function Vista() {
    const [data, setData] = useState([]);
    const [dataLlamado, setDataLlamado] = useState([]);

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
        });

        return () => {
        // Cuando el componente se desmonta, deten el listener
        unsubscribe();
        };
    }, []);

    return (
        <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
        <div className='w-3/5'>
            {dataLlamado.length === 0 ? (
                <div className="flex justify-center">
                    <p className="font-bold texto-aparecer-desaparecer">CARGANDO...</p>
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
            <div className='w-2/3'>
                {data.length === 0 ? (
                    <div className="flex justify-center">
                    <p className="font-bold texto-aparecer-desaparecer">CARGANDO...</p>
                    </div>
                ) : (
                    data.map((item, i) => {
                    return (
                        <Call key={i} turno={item}/>);
                    })
                )}
            </div>
        </section>
    );
}

export default Vista;
