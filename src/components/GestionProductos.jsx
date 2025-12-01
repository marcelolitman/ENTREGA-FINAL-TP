//TODO: pasar listado de productos a que lo haga un componente??debe diferir del listado d eproductos del usuario que no es admin

import ProductoContext from "../context/ProductoContext"
import { useContext, useState } from "react";
import FormProducto from "./FormProducto";


function GestionProductos(){

    const {productos, cargando, error,  eliminarProducto}=useContext(ProductoContext);
    const [productoSeleccionado, setProductoSeleccionado]= useState(null)
    const [modoForm, setModoForm]= useState("agregar");

    function dispararAgregarProducto(){
            setModoForm("agregar");
            setProductoSeleccionado(null);
        }
    
    function dispararEdicionProducto(producto){
        setModoForm("edicion");
        setProductoSeleccionado(producto);
    }


    if(cargando){
        return <h2>CARGANDO...</h2>
    }
    if(error){
        return <h2>ERROR</h2>
    }      

    return(
        <>
                
        <FormProducto modoForm={modoForm} productoSeleccionado={productoSeleccionado} setProductoSeleccionado={setProductoSeleccionado}/>
        
        <div className='d-flex justify-content-center m-2'>
            <button onClick={()=>dispararAgregarProducto()}>Agregar Producto Nuevo</button>
        </div>        
        
        <h2>Catalogo de Productos</h2> 
        {/*toma array de productos y los lista: nos permite elegir producto a editar y/o eliminar*--------------*/}
        <div>            
            <div className="row g-3">
                {
                productos.map(producto=>

                    //card productos
                    <div key={producto.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card card-tamano">
                            <img src={producto.imagen} className="card-img-top h-50 object-fit-contain"/>
                            <div className="card-body">
                                <h5 className="card-title fs-4">{producto.nombre}</h5>
                                <p className="card-text text-center">${producto.precio}</p>
                                {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                                
                                <div className="d-flex justify-content-center gap-2 py-3">
                                    <button onClick={()=>dispararEdicionProducto(producto)}>EDITAR</button>
                                    <button onClick={()=>eliminarProducto(producto.id)}>ELIMINAR</button>                                    
                                </div>                            
                            </div>
                        </div>  
                    </div>

                                   
                                       
                )
                }
            </div>
        </div>

    
        
        
        
        </>
    )
}

export default GestionProductos