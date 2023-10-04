import React, { createContext, useState } from 'react'

const ContextTurnero=createContext();
const { Provider }= ContextTurnero;
function ContextTurneroProvider(props) {
    const [turnoActual,setTurnoActual]=useState('')
    const updateTurnoActual = (data) => {
        setTurnoActual(data);
    };
    return (
        <Provider value={{turnoActual, updateTurnoActual}}>
            {props.children}
        </Provider>
    )
}
export {ContextTurnero,ContextTurneroProvider};