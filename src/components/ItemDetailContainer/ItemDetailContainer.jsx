import ItemDetail from "../ItemDetail/ItemDetail";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { db } from "../../services/FirebaseConfig";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const docRef = doc(db, "products", itemId);

    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const productAdapter = { id: response.id, ...data };
        setProduct(productAdapter);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [itemId]);

  return (
    <div className="item-detail_container">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
