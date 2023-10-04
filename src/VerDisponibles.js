import { useState } from "react";

import { collection, addDoc, serverTimestamp } from "firebase/firestore"; // Asegúrate de importar los módulos de Firestore adecuadamente
import { db } from "./db/datos";
function VerDisponibles({ turnos }) {
    const [selectedPuesto, setSelectedPuesto] = useState("");
    

    const llamar = () => {
        // Luego, agrega datos a Firestore
        const llamadoCollection = collection(db, "llamados");
        const llamado = {
        nombre: turnos.datos.nombre,
        apellido: turnos.datos.apellido,
        puesto: selectedPuesto,
        timestamp: serverTimestamp(),
        };

        addDoc(llamadoCollection, llamado)
        .then((resultado) => {
            console.log(resultado);
        })
        .catch((error) => {
            console.error(error);
        });
    };

    const handlePuestoChange = (event) => {
        setSelectedPuesto(event.target.value);
    };

    return (
        <div key={turnos.id} className="grid  md:grid-cols-1 border border-black card shadow-md p-4 rounded-md bg-gray-200">
        <div className="flex justify-center ">
            <h2 className=" text-start font-black uppercase m-3">
            {turnos.datos.apellido}
            </h2>
            <h2 className=" text-start font-black uppercase m-3">{turnos.datos.nombre}</h2>
        </div>
        <p>{turnos.datos.tramite}</p>
        <select onChange={handlePuestoChange}>
            <option value="select">elige lugar</option>
            <option value="Puesto 1">Puesto 1</option>
            <option value="Puesto 2">Puesto 2</option>
            <option value="Puesto 3">Puesto 3</option>
            <option value="ConsultorioMedico">Consultorio Médico</option>
        </select>
        <button className="rounded-md border border-radius border-black bg-green-500 p-1" onClick={llamar}>
            llamar
        </button>
        </div>
    );
    }

export default VerDisponibles;
