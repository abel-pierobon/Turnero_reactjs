import React, { createContext, useState } from 'react'
import Timbre from './Timbre.mp3'

const ContextTurnero=createContext();
const { Provider }= ContextTurnero;
function ContextTurneroProvider(props) {
    const [turnoActual,setTurnoActual]=useState('')
    const updateTurnoActual = (data) => {
        setTurnoActual(data);
    };
    const reproducirSonido = () => {
        const audio = new Audio(Timbre);
        audio.play();
    };
    return (
        <Provider value={{turnoActual, updateTurnoActual, reproducirSonido}}>
            {props.children}
        </Provider>
    )
}
export {ContextTurnero,ContextTurneroProvider };