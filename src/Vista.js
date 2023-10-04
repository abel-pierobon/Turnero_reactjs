import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from './db/datos';
import Call from './Call';

function Vista() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Función para obtener los datos iniciales
        const fetchData = async () => {
        const llamadoCollection = collection(db, 'llamados');
        const q = query(llamadoCollection, orderBy('timestamp', 'desc'));

        try {
            const querySnapshot = await getDocs(q);
            const aux = querySnapshot.docs.map((doc) => {
            const turno = doc.data();
            turno.id = doc.id;
            return turno;
            });
            setData(aux);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
        };

        fetchData();

        // Configura un listener para escuchar cambios en la colección "llamados"
        const llamadoCollection = collection(db, 'llamados');
        const q = query(llamadoCollection, orderBy('timestamp', 'desc'));

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

    return (
        <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
        {data.length === 0 ? (
            <div className="flex justify-center">
            <p className="font-bold texto-aparecer-desaparecer">CARGANDO...</p>
            </div>
        ) : (
            data.map((item, i) => {
            return (
                <Call
                key={i}
                turno={item}
                />
            );
            })
        )}
        </section>
    );
}

export default Vista;
