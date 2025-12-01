import { createContext, useState, useEffect } from "react";

export const ProductoContext=createContext();

export function ProductoProvider({children}){

      
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  
  const [actualizarListadoProductos, setActualizarListadoProductos] = useState(true);


  const API = "https://68dd44207cd1948060ad0b9b.mockapi.io/productos";
  
  // Cargar productos al montar el componente
  useEffect(() => {
    cargarProductos();
  }, [actualizarListadoProductos]);

  //toma productos de la api y los guarda en estado "productos"
  const cargarProductos = async () => {
    try {
      setCargando(true);
      setError(null);
      
      const respuesta = await fetch(API);
      
      if (!respuesta.ok) 
        throw new Error(`Error HTTP: ${respuesta.status}`);
      
      const datos = await respuesta.json();
      setProductos(datos);

    } catch (error) {
      console.error("Error al cargar productos:", error);
      setError(error.message || "Error al cargar los productos");

    } finally {
      setCargando(false);
    }
  };



    //funcion para agregar producto: recibe un producto y lo guarda en mockapi
    const agregarProducto = async (producto) => { 
        try { 
        
            const respuesta = await 
            
            fetch('https://68dd44207cd1948060ad0b9b.mockapi.io/productos', { 
            method: 'POST', 
            headers: { 
                'Content-Type': 'application/json', 
            }, 
            body: JSON.stringify(producto), 
            }); 
            if (!respuesta.ok) { 
            throw new Error('Error al agregar el producto.'); 
            } 
            const data = await respuesta.json(); 
            console.log('Producto agregado:', data);
            //para que vuelva a renderizar la lista de productos con los cambios
            setActualizarListadoProductos(!actualizarListadoProductos); 
            alert('Producto agregado correctamente'); 
        } catch (error) { 
            console.error(error.message); 
            alert('Hubo un problema al agregar el producto.'); 
        } 
        };
    //fin agregar producto


    //funcion para editar producto: recibe un producto y lo actualiza en mockapi
    const editarProducto= async(producto)=>{
        try { 
            const respuesta = await 
            fetch(`https://68dd44207cd1948060ad0b9b.mockapi.io/productos/${producto.id}`, { 
            
                    method: 'PUT', 
                    headers: { 
                    'Content-Type': 'application/json', 
                    }, 
                    body: JSON.stringify(producto), 
                }); 
            
                if (!respuesta.ok) { 
                    throw new Error('Error al actualizar el producto.'); 
                } 
            
                const data = await respuesta.json(); 
                console.log(data);
                
                //setProductoSeleccionado(null);
                //para que vuelva a renderizar la lista de productos con los cambios
                setActualizarListadoProductos(!actualizarListadoProductos); 
                alert('Producto actualizado correctamente.'); 
            } catch (error) { 
                console.error(error.message); 
                alert('Hubo un problema al actualizar el producto.'); 
            } 
    };
    //fin

    //funcion para eliminar producto: recib eun id de un producto y lo elimina de mockapi
   const eliminarProducto = async (id) => { 
        const confirmar = window.confirm('¿Estás seguro de que deseas eliminar este producto?'); 
        if (confirmar) { 
            try { 
            const respuesta = await 
        fetch(`https://68dd44207cd1948060ad0b9b.mockapi.io/productos/${id}`, { 
                method: 'DELETE', 
            }); 
            if (!respuesta.ok) { 
                throw new Error('Error al eliminar el producto.'); 
            }
            //para que vuelva a renderizar la lista de productos con los cambios
            setActualizarListadoProductos(!actualizarListadoProductos); 
            alert('Producto eliminado correctamente.'); 
            } catch (error) { 
            console.error(error.message); 
            alert('Hubo un problema al eliminar el producto.'); 
            } 
        } 
}; 
 

    return(
        <ProductoContext.Provider value={{productos, cargando, error, cargarProductos, agregarProducto, eliminarProducto, editarProducto}}>
            {children}
        </ProductoContext.Provider>
    )
}

export default ProductoContext