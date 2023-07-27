import { useState } from "react";

const ItemCount = ({ stock, addProduct }) => {

    const [count, setCount] = useState(1);

    const incrementarCount = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const decrementarCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }


    return (
        <div>
            <div>
                <button className="button is-danger is-light" onClick={decrementarCount}>-</button>
                <button className="button is-danger is-light">{count}</button>
                <button className="button is-danger is-light" onClick={incrementarCount}>+</button>
            </div>
            <div>
                <button className="button is-danger is-light" onClick={() => addProduct(count)}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;