import { NavLink,Link } from "react-router-dom";
import { useContext } from "react";
import { ContextTurnero } from "./ContextTurnero";

function NavBar() {
    const { usuario, updateUsuario } = useContext(ContextTurnero);

    const handleLogout = () => {
        // Aquí puedes agregar la lógica de cierre de sesión, como limpiar el localStorage
        // y actualizar el estado del usuario a false en el contexto.
        // Por ejemplo:
        localStorage.removeItem("userId");
        localStorage.removeItem("userDisplayName");
        localStorage.removeItem("userEmail");
        updateUsuario(false);
    };

    return (
        <div className="flex justify-around font-bold nav">
        <NavLink to={"/"}>
            <img
            className="logo"
            src={"https://cordoba.gob.ar/wp-content/uploads/2023/12/Logo-blanco-e1702566943562.png"}
            alt="logo municipalidad"
            />
        </NavLink>
        <div className="flex content-center mt-3">
            <NavLink to={"/"} className="mx-8 text-xl p-2 ">
            Inicio
            </NavLink>
            {usuario ? (
            <>
                <NavLink to={"/carga"} className="mx-8 text-xl p-2 ">
                Cargar turno
                </NavLink>
                <NavLink to={"/disponibles"} className="mx-8 text-xl p-2 ">
                Llamar turno
                </NavLink>
                <Link onClick={handleLogout} className="mx-8 text-xl p-2">
                Cerrar Sesión
                </Link>
            </>
            ) : (
            <NavLink to={"/login"} className="mx-8 text-xl p-2">
                Iniciar Sesión
            </NavLink>
            )}
        </div>
        </div>
    );
}

export default NavBar;
