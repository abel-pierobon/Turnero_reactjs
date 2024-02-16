import { NavLink } from "react-router-dom"
import { ContextTurnero } from "./ContextTurnero";
import { useContext } from "react";


function NavBar() {
    const {usuario}= useContext(ContextTurnero);

    return (
        <div className="flex justify-around font-bold nav">
            <NavLink  to={'/'}>
            <img
                className="logo"
                src={"https://cordoba.gob.ar/wp-content/uploads/2023/12/Logo-blanco-e1702566943562.png"}
                alt="logo municipalidad"
            />
            </NavLink>
            <div className="flex content-center mt-3">
                <NavLink to={'/'} className='mx-8 text-xl p-2'>Inicio</NavLink>
                {usuario ? (
                <>
                    <NavLink to={"/carga"} className='mx-8 text-xl p-2'> Cargar turno</NavLink>
                    <NavLink to={"/disponibles"} className='mx-8 text-xl p-2'> Llamar turno</NavLink>
                </>
                ) : (
                <NavLink to={"/login"} className='mx-8 text-xl p-2'> Iniciar Sesión</NavLink>
                )}
            </div>
        </div>
    )
}
export default NavBar