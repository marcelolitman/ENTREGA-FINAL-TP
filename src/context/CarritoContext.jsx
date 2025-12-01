import { createContext, useState } from "react";

export const CarritoContext= createContext();

export function CarritoProvider({children}){

     const [carrito, setCarrito]= useState([])

    function agregarCarrito(producto){
        setCarrito([...carrito, producto])
    }

    function vaciarCarrito(){
        setCarrito([])
    }
    function eliminarDelCarrito(indice){
        const arrayPivot=carrito.filter((x,y)=>y!=indice);
        setCarrito(arrayPivot);
    }

    return(
        <CarritoContext.Provider value={{carrito, agregarCarrito, vaciarCarrito, eliminarDelCarrito}}>
            {children}
        </CarritoContext.Provider>
    )

}