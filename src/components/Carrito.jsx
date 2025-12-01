import { useContext, useEffect, useState } from "react"
import { CarritoContext } from "../context/CarritoContext"



function Carrito(){  
    const {carrito, eliminarDelCarrito, vaciarCarrito} = useContext(CarritoContext)
     
    const [total, setTotal]= useState(0);
       
    useEffect(()=>{
        calcularTotal()
    } 
    ,[carrito]);
    
    function calcularTotal(){
            
        const suma=carrito.reduce((acu, producto)=>acu+ Number(producto.precio) , 0);
        setTotal(suma);
    }  

    return(

        <div>
            <h2>Productos en el Carrito</h2>

            {/*card de pago*/}
            <div className="card p-3 w-50 mx-auto" id="pago"> {/*style="max-width: 350px;" */}
                <h3 className="mb-3">Resumen de Compra</h3>

                <div className="d-flex justify-content-between">
                    <span>Subtotal</span>
                    <span>${total}</span>
                </div>

                <div className="d-flex justify-content-between">
                    <span>Envío</span>
                    <span>Gratis</span>
                </div>

                <div className="d-flex justify-content-between border-top pt-2 mt-2 fw-bold fs-5">
                    <span>Total a pagar</span>
                    <span>${total}</span>
                </div>

                <button className="w-100 mt-3 fw-bold">Finalizar Compra</button>
                </div>
            {/**fin card de pago. comien<o lista de productos en el carrito------------------------------*/}
            
            
               <div className="row g-3"> 
                {
                carrito.map((producto, indice)=>
                        
                    <div key={indice} className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card card-tamano">
                            <img src={producto.imagen} className="card-img-top h-50 object-fit-contain"/>
                            <div className="card-body">
                                <h5 className="card-title fs-4">{producto.nombre}</h5>
                                <p className="card-text text-center">${producto.precio}</p>
                                {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}                                
                                <div className="d-flex justify-content-center gap-2 py-3">
                                    <button onClick={()=>eliminarDelCarrito(indice)}>Eliminar</button>                                    
                                </div>                            
                            </div>
                        </div>  
                    </div>
                    
                    /*codigo original sin estilos
                        <li key={indice}>

                            <p>{producto.nombre}</p>
                            <p>{producto.precio}</p>
                            <img src={producto.imagen} style={{width:"50px", height:"50px"}}/>
                            <button onClick={()=>eliminarDelCarrito(indice)}>Eliminar</button>                    
                        </li> 
                        */
                    
                                       
                )
                }
                </div>
            <div className="d-flex justify-content-center m-3">
                <button  onClick={vaciarCarrito}>VACIAR CARRITO</button>
            </div>
            
        </div>

    )
}


export default Carrito