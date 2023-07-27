import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config"; 
import { getDoc, doc } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [ item, setItem ] = useState({});
    const { productId } = useParams();

    useEffect(()=>{
        
        const getProductosFromFirebase = async () => {
       
            const docRef = doc(db, "test", productId)

            const querySnapshot = await getDoc(docRef)
            const product = querySnapshot.data()
            product['id'] = productId
            setItem(product);   
        

        }
        getProductosFromFirebase();
    }, [productId])

    return (
        <div>
            <ItemDetail producto={item} />
        </div>
    )
}

export default ItemDetailContainer;