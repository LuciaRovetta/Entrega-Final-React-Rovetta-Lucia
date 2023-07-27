import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({ producto }) => {

    const { addProductToCart } = useCartContext()

    const addProduct = ( count ) => {
        addProductToCart( producto, count )
    }


    return (
        <div className="container">
            <div className="columns">
                <div className="column">
                    <img src={producto.imagen} alt={producto.nombre} />
                </div>
                <div className="column has-text-left">
                    <h3 className="is-size-4">{producto.nombre}</h3>
                    <p className="is-size-3 has-text-weight-bold">${producto.precio}</p>
                    <p className="mb-5">{producto.descripcion}</p>
                    <ItemCount stock={producto.stock} addProduct = { addProduct } />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;