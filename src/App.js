import Cart from "./components/Cart/Cart";
import NavBar from "./components/NavBar/NavBar";
import Checkout from "./components/Checkout/Checkout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import { CartProvider } from "./context/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h2>404 Page not found</h2>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;