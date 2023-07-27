import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <Link to={"/item/" + item.id}>
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                    <img src={item.imagen} alt={item.nombre} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="content">
                        {item.nombre}<br />${item.precio}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Item;