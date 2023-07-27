//Importo img svg carrito
import cart from "./assets/cart.svg"
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

//Creo componente carrito
const CartWidget = () => {
    const { totalItemsInCart } = useCartContext();

    return (
        <div>
            {totalItemsInCart() > 0 ? 
            <Link to='/cart' title="Ir al Carrito">
                <img src={cart} alt="cart-widget" height="30px" className="pr-1" /> {totalItemsInCart()}
            </Link>
            : "" }
        </div>
    )
}

//Exporto img carrito (componente)
export default CartWidget