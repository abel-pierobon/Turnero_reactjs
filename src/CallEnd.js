import React from 'react'

function CallEnd({turno}) {
    return (
        <div key={turno.id} className="grid  md:grid-cols-1 border border-black card shadow-md p-4 rounded-md bg-blue-200">
            <div className="flex justify-center">
                <h2 className="text-start font-black uppercase m-3">
                {turno.apellido}
                </h2>
                <h2 className="text-start font-black uppercase m-3">{turno.nombre}</h2>
                <h2 className="text-start font-black uppercase m-3">{turno.puesto}</h2>
            </div>
        </div>
    )
}

export default CallEnd