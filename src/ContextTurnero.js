import React, { createContext, useState } from 'react'
import Timbre from './Timbre.mp3'

const ContextTurnero=createContext();
const { Provider }= ContextTurnero;
function ContextTurneroProvider(props) {
    const [turnoActual,setTurnoActual]=useState('')
    const updateTurnoActual = (data) => {
        setTurnoActual(data);
    };
    const [usuario,setUsuario]=useState('')

    const reproducirSonido = () => {
        const audio = new Audio(Timbre);
        audio.play();
    };
    
    const updateUsuario = (user) => {
        setUsuario(user);
        console.log(usuario)
    };
    return (
        <Provider value={{turnoActual, updateTurnoActual, reproducirSonido, updateUsuario,usuario}}>
            {props.children}
        </Provider>
    )
}
export {ContextTurnero,ContextTurneroProvider };