import React from 'react'
import { LinksContainerStyled } from '../Navbar'

function CartIcon() {
  return (
    <LinksContainerStyled >
    <img src="https://res.cloudinary.com/dkdvehyzk/image/upload/v1720457115/cesta_omvhgv.png"  alt="" />
    <span>5</span>
    </LinksContainerStyled>
  )
}

export default CartIcon