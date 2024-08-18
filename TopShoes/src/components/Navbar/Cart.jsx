import React from 'react'
import { CartButton, CartContainer} from './Navbar.js'

function Cart(props) {
  return (
    <>
    <CartContainer>
        <CartButton onClick={props.toggleMenu} className= {`${props.openCart ? "active" : ""}`}>
            
    </CartButton>
   
    </CartContainer>
    </>
  )
}

export default Cart