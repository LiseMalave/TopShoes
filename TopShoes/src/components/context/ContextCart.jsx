import React, { createContext, useState } from 'react'

export const CartContext = createContext();
function ContextCart({children}) {
    const [opencart, setOpenCart] = useState(false);
    const toggleCart = () => {
      setCart(prevOpen => !prevOpen)
    };
  return (
    <>
    <CartContext.Provider value={
        [toggleCart,setOpenCart,opencart]
        
    }>
    {children}
    </CartContext.Provider>
    </>
  )
}

export default ContextCart