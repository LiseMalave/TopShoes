import React from 'react'
import { CartButton, CartContainer, CartInfo} from './Navbar.js'


const IsOpen = () => {
  
}

function Cart(props) {
 
  return (
    <>
    <CartContainer>
        <CartButton onClick={props.toggleCart} className= {`${props.openCart ? "active" : ""}`}>
        <img src="https://res.cloudinary.com/dkdvehyzk/image/upload/v1720457115/cesta_omvhgv.png"  alt="" />
        <CartInfo>
          <h1>productos</h1>
        </CartInfo>
    </CartButton>
      
    
    </CartContainer>
    
    </>
  )
}

export default Cart