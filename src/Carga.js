import { useState } from "react";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from "./db/datos";


function Carga() {
    const [persona, setPersona] = useState({
        nombre: '',
        apellido: '',
        tramite: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPersona({
            ...persona,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const agregarTurno = collection(db, 'turnos');
        const turno = {
            datos: {
                nombre: persona.nombre,
                apellido: persona.apellido,
                tramite: persona.tramite,
            },
            fecha: serverTimestamp(),
        };

        const nuevoTurno = addDoc(agregarTurno, turno);
        nuevoTurno
            .then((resultado) => {
                console.log(resultado);
                setPersona({
                    nombre: '',
                    apellido: '',
                    tramite: 'otros'
                });
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <h2 className='flex justify-center text-2xl font-black  '>Completa el formulario para cargar un turno</h2>
            <form className="max-w-md mx-auto my-8 font-black">
                <div className="mb-4">
                    <label className="block text-black-900 text-sm font-black mb-2">
                        Nombre
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Ingresa el nombre"
                        name="nombre" 
                        value={persona.nombre}  
                        onChange={handleInputChange}  
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-black-900 text-sm font-black  mb-2">
                        Apellido
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Ingresa el apellido"
                        name="apellido" 
                        value={persona.apellido}  
                        onChange={handleInputChange} 
                        required
                    />
                </div>

                <div className="mb-4">
                
                <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline"
                        name="tramite"
                        value={persona.tramite}
                        onChange={handleInputChange} // Cambiar a handleInputChange
                    >
                        <option value="otros">otros</option>
                        <option value="Renovacion">Renovación</option>
                        <option value="Historial">Historial</option>
                    </select>
                </div>

                <button
                    onClick={handleSubmit}
                    className="bg-green-600 hover:bg-green-400 text-black font-black border border-black py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit" 
                >
                    cargar
                </button>
            </form>
        </div>
    );
}

export default Carga;
