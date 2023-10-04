import { NavLink } from "react-router-dom"


function NavBar() {
    return (
        <div className="flex justify-between bg-blue-100 font-bold">
            <NavLink  to={'/'}>
            <img
                className="logo"
                src={`https://boletinmunicipal.cordoba.gob.ar/assets/img/logo-muni.png`}
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