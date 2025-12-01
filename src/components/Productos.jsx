import { useState, useEffect, useContext } from "react"
import {Link} from 'react-router-dom'
import { CarritoContext } from "../context/CarritoContext"
import ProductoContext from "../context/ProductoContext"

function Productos(){

    const {agregarCarrito} = useContext(CarritoContext)
    const {productos, cargando, error} = useContext(ProductoContext) 

    if(cargando){
        return <h2>CARGANDO...</h2>
    }
    if(error){
        return <h2>ERROR</h2>
    }      

    return(
        <div>
            <h2>Productos Disponibles</h2>
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
                                    <button onClick={()=>agregarCarrito(producto)}>Agregar</button>
                                    <Link to={"/detalle/"+producto.id}> <button>Detalle </button></Link>
                                </div>                            
                            </div>
                        </div>  
                    </div>

                    /*codigo original sin estilos
                    <li key={producto.id}>

                        <p>{producto.nombre}</p>
                        <p>{producto.precio}</p>
                        <img src={producto.imagen} style={{width:"50px", height:"50px"}}/>
                        <button onClick={()=>agregarCarrito(producto)}>Agregar</button>
                        <Link to={"/detalle/"+producto.id}>Detalle</Link>                    
                    </li>
                     */                    
                                       
                )
                }
            </div>
                
            
        </div>

   


    )
}

export default Productos