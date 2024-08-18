import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function ContextCart({ children }) {
  const [openCart, setOpenCart] = useState(false);

  const toggleCart = () => {
    setOpenCart(prevOpen => !prevOpen);
  };
  return (
 
      <CartContext.Provider value={{toggleCart, setOpenCart, openCart}}>
        {children}
      </CartContext.Provider>
  
  );
}

export default ContextCart;
