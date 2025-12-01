import { useParams } from "react-router-dom"
import { useState, useEffect, useContext } from "react";
import ProductoContext from "../context/ProductoContext";

function Detalle(){

    const [producto, setProducto] = useState(null);
    const { id } = useParams();
    const { productos } = useContext(ProductoContext);

    useEffect(() => {
        buscar(id);
    }, [id]);

    function buscar(x){
        setProducto(productos.find((p) => p.id == x));
    }

    if (!producto) return <p>Cargando...</p>;

    return(
        <div className="h-50 w-50 d-block mx-auto justify-content-center">  
            <h3>{producto.nombre}</h3>
            <img src={producto.imagen} className="h-25 w-25 d-block mx-auto"/>
            <p className="text-center m-2 fs-3 text-white">${producto.precio}</p>
            <p className="text-center fst-italic text-white">{producto.descripcion}</p>
                       
            {/*codigo original sin estilo

            <p>Nombre: {producto.nombre}</p>
            <p>Precio: {producto.precio}</p>
            <img src={producto.imagen} style={{width:"50px", height:"50px"}} />
            <p>Descripción: <br/> {producto.descripcion}</p>

            */}
        </div>
    );
}

export default Detalle;
