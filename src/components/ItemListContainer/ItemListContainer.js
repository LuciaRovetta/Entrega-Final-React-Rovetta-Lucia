import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config"; 
import { collection, getDocs, where, query } from "firebase/firestore"

const ItemListContainer = () => {
    const [ items, setItems ] = useState([]);
    const { categoryId } = useParams();

    useEffect(()=>{
        
        const getProductosFromFirebase = async () => {
       
            let ref = categoryId
                    ? getDocs(query(collection(db, "test"),where("categoria", "==", categoryId)))
                    : getDocs(collection(db, "test"))
            await ref
                .then((querySnapshot)=>{               
                    const productsData = querySnapshot.docs
                        .map((doc) => ({...doc.data(), id:doc.id }));
                    setItems(productsData);   
                })

        }
        getProductosFromFirebase();
    }, [categoryId])
    


    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;