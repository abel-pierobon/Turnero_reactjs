import { NavLink } from "react-router-dom"


function NavBar() {
    return (
        <div className="flex justify-around font-bold nav">
            <NavLink  to={'/'}>
            <img
                className="logo"
                src={"https://cordoba.gob.ar/wp-content/uploads/2022/08/cba-capital.svg"}
                alt="logo municipalidad"
            />
            </NavLink>
            <div className="flex content-center mt-3">
            <NavLink to={'/'} className='mx-8'>Inicio</NavLink>
            <NavLink to={"/carga"} className='mx-8' > Cargar turno</NavLink>
            <NavLink to={"/disponibles"} className='mx-8'> Llamar turno</NavLink>
            </div>
        </div>
    )
}
export default NavBar