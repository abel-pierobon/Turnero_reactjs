import React from 'react';

function CallEnd({ turno, esUltimo }) {
    const clases = esUltimo ? 'call-end-destacado' : '';

    return (
        <div key={turno.id} className={`grid md:grid-cols-1 border border-black card shadow-md p-4 rounded-md ${clases} ultimoLlamado`}>
            <div className="flex justify-center">
                <h2 className="text-start font-black uppercase m-3 text-sm md:text-2xl lg:text-6xl  ">
                    {turno.apellido}
                </h2>
                <h2 className="text-start font-black uppercase m-3  text-sm md:text-2xl lg:text-6xl">{turno.nombre}</h2>
                <h2 className="text-start font-black uppercase m-3  text-sm md:text-2xl lg:text-6xl">{turno.puesto}</h2>
            </div>
        </div>
    );
}

export default CallEnd;
