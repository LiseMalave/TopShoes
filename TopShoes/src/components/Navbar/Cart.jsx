import React from 'react'
import { CartButton, CartContainer} from './Navbar.js'

function Cart(props) {
  return (
    <>
    <CartContainer>
        <CartButton onClick={props.toggleCart} className= {`${props.openCart ? "active" : ""}`}>
        <img src="https://res.cloudinary.com/dkdvehyzk/image/upload/v1720457115/cesta_omvhgv.png"  alt="" />
    </CartButton>
    
    </CartContainer>
    </>
  )
}

export default Cart