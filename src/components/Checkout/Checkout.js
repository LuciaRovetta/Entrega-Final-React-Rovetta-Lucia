import { useState } from "react";
import { db } from "../../firebase/config"; 
import { addDoc, collection } from "firebase/firestore"
import { useCartContext } from "../../context/CartContext";

const Checkout = () => {
    const [orderId, setOrderId] = useState("");
    const { cartListProducts, totalCartAmount, clearCart } = useCartContext();

    const [values, setValues] = useState({
        name: "",
        email: "",
      });
    
      const handleInputChange = (e) => {
        setValues({
          ...values,
          [e.target.name]: e.target.value,
        });
      };
   
      const handleSubmit = async (e) => {
        e.preventDefault();

        const order = {
          buyer: values,
          items: cartListProducts,
          total: totalCartAmount()
        };

        const itemsCollectionRef = collection(db, "order")
        const response = await addDoc( itemsCollectionRef , order)
        //console.log(response.id)
        setOrderId(response.id);
        clearCart()
    };

    return (
        <>
            <div className="columns is-centered">
                <div className="my-6 column is-one-third">
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <h2 className="my-3 title is-3">Realizar Pedido</h2>
                        <div className="field">
                            <label className="label">Nombre</label>
                            <div className="control">
                            <input placeholder="Nombre" id="name" name="name" className="input" onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control">
                            <input placeholder="Email" id="email" name="email" className="input" onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button is-link">Enviar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="columns is-centered">
                <div className="my-6 is-one-third">
                    {orderId ?
                        <div className="notification is-primary is-light">
                            <button className="delete"></button>
                            <h1 className="title is-3">Gracias por tu Compra!</h1>
                            <p>Tu número de compra es: <b>{orderId}</b></p>
                        </div>
                    : ""}
                </div>
            </div>
        </>
    )
}

export default Checkout;