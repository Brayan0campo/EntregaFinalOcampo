import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import cartwidget from "../../assets/cartwidget.png";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div className="header-navbar__cart">
      <Link to="/cart" className="cart-link">
        <img src={cartwidget} alt="Cart" />
        {totalQuantity > 0 && <span>{totalQuantity}</span>}
      </Link>
    </div>
  );
};

export default CartWidget;
