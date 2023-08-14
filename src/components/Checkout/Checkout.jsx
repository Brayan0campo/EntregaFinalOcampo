import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

import { db } from "../../services/FirebaseConfig";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";

const Checkout = () => {
  const { cart, clearCart, totalQuantity } = useContext(CartContext);

  const [name, setName] = useState("");
  const [lastname, setlastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmation, setEmailConfirmation] = useState("");
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");

  const formHandler = (e) => {
    e.preventDefault();

    if (!name || !lastname || !phone || !email || !emailConfirmation) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (email !== emailConfirmation) {
      setError("Los emails no coinciden");
      return;
    }

    const order = {
      items: cart.map((product) => ({
        id: product.item.id,
        title: product.item.name,
        quantity: product.quantity,
      })),
      total: totalQuantity,
      name,
      lastname,
      phone,
      email,
      date: new Date(),
    };

    Promise.all(
      order.items.map(async (productOrder) => {
        const productRef = doc(db, "products", productOrder.id);
        const productDoc = await getDoc(productRef);
        const productStock = productDoc.data().stock;

        await updateDoc(productRef, {
          stock: productStock - productOrder.quantity,
        });
      })
    )
      .then(() => {
        addDoc(collection(db, "orders"), order)
          .then((response) => {
            setOrderId(response.id);
            clearCart();
          })
          .catch((error) => {
            console.log("Error al crear la orden", error);
            setError("Error al crear la orden");
          });
      })
      .catch((error) => {
        console.log("Error al actualizar el stock", error);
        setError("Error al actualizar el stock");
      });
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={formHandler} className="form-container">
        {cart.map((product) => (
          <div key={product.id}>
            <p>
              {product.item.name} x {product.quantity}
            </p>
            <p>Precio: ${product.item.price}</p>
          </div>
        ))}
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Lastname"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email Confirmation"
            value={emailConfirmation}
            onChange={(e) => setEmailConfirmation(e.target.value)}
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Confirmar Orden</button>
      </form>
      {orderId && (
        <span>¡Gracias por tu compra! Tu numero de orden es: {orderId} </span>
      )}
    </div>
  );
};

export default Checkout;
