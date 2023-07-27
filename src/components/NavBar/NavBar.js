//Importo componente carrito 
import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"


//Creo la barra de navegación  
const NavBar = () => {
    return (
        <div className="columns my-3 is-vcentered">
            <div className="column">
                <Link to={"/"}>
                    <img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/003/039/113/themes/common/logo-1833024819-1681757774-e93386c52fe173659450c309512c311e1681757774-480-0.png?0" alt="Lupita Store" title="Lupita Store" width={180} />
                </Link>
            </div>
            <div className="column">
                <Link to={"/category/abrigos"} className="button is-danger is-light">Abrigos</Link>
                <Link to={"/category/chalecos"} className="button is-danger is-light">Chalecos</Link>
                <Link to={"/category/pantalones"} className="button is-danger is-light">Pantalones</Link>
            </div>
            <div className="column">
                <CartWidget/>
            </div>
        </div>
    )
}
//Exporto el componente
export default NavBar
