import { Header } from "./components/Layout/Header";
import { Meals } from "./components/Meals/Meals";
import CartProvider from "./components/store/cart-provider";
import { Cart } from "./components/UI/Cart";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Header />
      <Cart />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
