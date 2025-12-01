//TODO: borrar "setProductoSeleccionado(null)" luego de editarproducto?

import { useState, useContext, useEffect } from "react"
import ProductoContext from "../context/ProductoContext";

function FormProducto({modoForm, productoSeleccionado, setProductoSeleccionado}){

    const {agregarProducto, editarProducto} = useContext(ProductoContext);
    

    //duda para probar: hace falta poner producto seleccionado como opcion de inicializacion de producto o con las llaves del objeto alcanza?
    const [producto, setProducto]= useState({})
    const [errores, setErrores] = useState({});

    //carga producto seleccionado en producto para que se cargue en los campos del form y se pueda editar
     useEffect(() => {
        setProducto(productoSeleccionado || {})
        console.log(productoSeleccionado);
        setErrores({});
      },[productoSeleccionado]);

            

    function handleChange(e){        
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });
    }

    function handleSubmit(e){
        e.preventDefault();

        if(modoForm=="agregar"){
            if(validarFormulario()){
                agregarProducto(producto);
                setProducto({});
                setErrores({});
            } 
        }  else {
                if(validarFormulario()){
                    editarProducto(producto);
                    //es necesaria la siguiente linea?
                    setProductoSeleccionado(null);
                    setProducto({});
                    setErrores({});
            
                }
        }
    }
    
    
    //validacion formulario
    const validarFormulario = () => { 
         
        const nuevosErrores = {}; 
        
        if (!producto.nombre.trim()) { 
            nuevosErrores.nombre = 'El nombre es obligatorio.'; 
        } 
        if (!producto.precio || producto.precio <= 0) { 
            nuevosErrores.precio = 'El precio debe ser mayor a 0.'; 
        } 
        if (!producto.descripcion.trim() || producto.descripcion.length < 10) 
        { 
            nuevosErrores.descripcion = 'La descripción debe tener al menos 10 caracteres'; 
        } 
        
        if (!producto.imagen.trim() || producto.imagen.length < 7) 
        { 
            nuevosErrores.imagen = 'La url de la imagen debe tener al menos 7 caracteres'; 
        } 
        setErrores(nuevosErrores); 
        
        return Object.keys(nuevosErrores).length === 0; 
    };

    return(
    <>  
        
        
        <div className='d-flex justify-content-center'>
            <div className='border border-warning border-3 fondo rounded-3 m-3 w-50 d-flex justify-content-center'>
                <form onSubmit={handleSubmit}>
                    <p id="titulo-form-producto">{modoForm=="agregar" ? "Agregar Producto" : "Editar Producto"}</p>
                    <br/>
                    <label>Nombre del producto:</label>
                    <br/>
                    <input type="text" name="nombre" value={producto.nombre || ""} onChange={handleChange}/>
                    {errores.nombre && <p style={{ color: 'red' }}>{errores.nombre}</p>}
                    <br/>
                    <br/>

                    <label>Precio:</label>
                    <br/>
                    <input type="number" name="precio" value={producto.precio || ""} onChange={handleChange}/>
                    {errores.precio && <p style={{ color: 'red' }}>{errores.precio}</p>}
                    <br/>
                    <br/>

                    <label>Descripcion:</label>
                    <br/>
                    <input type="textarea" name="descripcion" value={producto.descripcion || ""} onChange={handleChange}/>
                    {errores.descripcion && <p style={{ color: 'red'}}>{errores.descripcion}</p>} 
                    <br/>
                    <br/>

                    <label>URL Imagen:</label>
                    <br/>
                    <input type="text" name="imagen" value={producto.imagen || ""} onChange={handleChange}/>
                    {errores.imagen && <p style={{ color: 'red'}}>{errores.imagen}</p>}
                    <br/>
                    <br/>
                    <div className='text-center m-2'>
                        <button type="submit">{modoForm=="agregar" ? "Agregar" : "Editar"}</button>
                    </div>
                </form>
            </div>
        </div>            
    </>
    )
}

export default FormProducto;