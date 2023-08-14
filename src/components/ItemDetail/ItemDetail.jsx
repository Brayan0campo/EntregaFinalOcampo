import ItemCount from "../ItemCount/ItemCount";

import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({
  id,
  name,
  image,
  category,
  description,
  price,
  stock,
}) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      price,
    };

    addItem(item, quantity);
  };

  return (
    <div className="item-detail">
      <article className="item-detail__card">
        <picture>
          <img src={image} alt={name} />
        </picture>
        <header>
          <h2>{name}</h2>
        </header>
        <section>
          <p>Categoría: {category}</p>
          <p>Descripción: {description}</p>
          <p>Precio: ${price}</p>
        </section>
        <footer className="item-detail__cart">
          {quantityAdded > 0 ? (
            <Link to="/cart" className="item-detail__link">
              Terminar Compra
            </Link>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
          )}
        </footer>
      </article>
    </div>
  );
};

export default ItemDetail;
