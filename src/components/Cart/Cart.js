import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartListProducts, totalCartAmount, deleteProductById } = useCartContext();  

  return (
    <div>
          {
            cartListProducts.length === 0 
            ? 
            <div className="my-6">
              <p className="my-6 title is-3">No hay productos!</p>
              <Link to='/' className="button is-danger is-light">
                <p>Volver al home</p>
              </Link>
            </div>
            :
            <>
            <div className="my-6 columns is-centered">

            
            <table className="table">
              <tbody>

                {cartListProducts.map((item)=>(
                  <tr key={item.id}>
                    <td><img src={item.imagen} alt={item.nombre} width={120} /></td>
                    <td>{item.nombre}</td>
                    <td>{item.count}</td>
                    <td>${item.precio}</td>
                    <td><button onClick={()=>deleteProductById(item.id)} className="button is-danger is-light">[ X ]</button></td>
                  </tr>))}

                  <tr>
                    <td colspan={2}>&nbsp;</td>
                    <td>Total:</td>
                    <td>${totalCartAmount()}</td>
                    <td><Link to={"/checkout"} className="button is-danger is-light">Ir al Checkout</Link></td>
                  </tr>

                </tbody>
              </table>
            </div>
            <div>
            
          </div>
            </>
          }
    </div>
  )
}

export default Cart
