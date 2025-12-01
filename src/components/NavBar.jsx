

import {Link} from 'react-router-dom'

import { useAuthContext } from '../context/AuthContext'

function NavBar(){
    const {usuario, logout}=useAuthContext()
    
    return(
        <nav>
            <ul className="d-flex justify-content-center menu">
                <li ><Link to="/inicio" className="menuItem">Inicio</Link></li>
                <li ><Link to="/ofertas" className="menuItem">Ofertas</Link></li>
                <li ><Link to="/carrito" className="menuItem">Carrito</Link></li>

                {/* habilita el link al panel administrador si esta logueado el usuario como admin */}            
                {usuario=="admin" && <li ><Link to="/admin" className="menuItem">Panel</Link></li>}
                
                

                 {/* si hay un usuario logueado, muestra su boton cerrar. sino muestra boton ingresar */}
                {usuario ?   
                        <li onClick={()=>logout()} className="menuItem cerrar-sesion">Cerrar Sesion {usuario}</li>
                        :
                        <li ><Link to="/login" className="menuItem">Ingresar</Link></li>    
                    }
                

            </ul>
        </nav>

    )
}

export default NavBar