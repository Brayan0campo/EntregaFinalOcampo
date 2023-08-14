import ItemList from "../ItemList/ItemList";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { db } from "../../services/FirebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const collectionRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapter = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapter);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <div className="item-container">
      <h2 className="title">PRODUCTOS</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
