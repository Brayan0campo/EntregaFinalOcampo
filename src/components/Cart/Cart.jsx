import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div className="cart-empty">
        <h2>No hay productos en el carrito</h2>
        <Link to="/" className="btn-products">
          Ver productos
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      {cart.map((product) => (
        <CartItem key={product.id} {...product} />
      ))}
      <div className="cart-total">
        <h3>Total: ${total}</h3>
        <button onClick={() => clearCart()}>Vaciar Carrito</button>
        <Link to="/checkout" className="btn-checkout">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
