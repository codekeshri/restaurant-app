import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const addItemToCartHandler = (item) => {
    CartContext.items.push(item);
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const cartContext = {
    items: cartItems,
    totalAmount: 0,
    addItem: addItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {console.log("inside cart-context")}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
