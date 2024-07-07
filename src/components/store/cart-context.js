import React from "react";

const CartContext = React.createContext({
  //CartContext will become a global object
  items: [],
  totalAmout: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;

// Now to change and update this contxt we use useState or useReducer
