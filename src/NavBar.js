import { NavLink } from "react-router-dom"


function NavBar() {
    return (
        <div className="flex justify-center bg-blue-500 font-bold">
            <NavLink to={'/'} className='mx-8'>Inicio</NavLink>
            <NavLink to={"/carga"} className='mx-8' > Cargar turno</NavLink>
            <NavLink to={"/disponibles"} className='mx-8'> Llamar turno</NavLink>
        </div>
    )
}
export default NavBar