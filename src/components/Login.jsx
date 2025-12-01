import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

function Login(){

    const [usuario, setUsuario] = useState('');
    const [contrasenia, setContrasenia] = useState('');
  
    const { login } = useAuthContext();
    const navigate = useNavigate();
    
    const manejarSubmit = (evento) => {
        evento.preventDefault();
        // Simulamos la Autenticacion
        if((usuario == 'admin' && contrasenia == '1234') || (usuario=="marcelo" && contrasenia=="litman"))
            {
                login(usuario);
                if(usuario=="admin"){
                    navigate('/admin');
                    }
                else{
                    navigate('/inicio')
                }
        }
            else {
            alert('Usuario o Contraseña invalido');
        }
    }


    return(
        <>
            <h2>Iniciar Sesion</h2>
            <div className='d-flex justify-content-center'>
                
                <div className='border border-warning border-3 fondo rounded-3 m-3 w-50 d-flex justify-content-center'>
                    <form onSubmit={manejarSubmit} >
                        <br/>
                        <label htmlFor=''>Usuario</label>
                        <br/>
                        <input 
                            type='text'
                            placeholder="admin/marcelo"
                            value={usuario}
                            onChange={(evento) => setUsuario(evento.target.value)}
                        />
                        <br/>
                        <br/>
                        
                        <label htmlFor=''>Contraseña</label>
                        <br/>
                        <input 
                            type='text'
                            placeholder="1234/litman"
                            value={contrasenia}
                            onChange={(evento) => setContrasenia(evento.target.value)}
                        />
                        
                        <br/>
                        <br/>
                        <div className='text-center m-2'>
                            <button  type='submit'>Iniciar Sesion</button>
                        </div>
                        
                    </form>
                </div>
                
            </div>
            
        </>   
        
    )
}

export default Login