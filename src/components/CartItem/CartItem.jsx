import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ item, quantity }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="cart-item">
      <div>
        <h4>{item.name}</h4>
        <p>Precio: ${item.price}</p>
        <p>Cantidad: {quantity}</p>
        <button onClick={() => removeItem(item.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default CartItem;
