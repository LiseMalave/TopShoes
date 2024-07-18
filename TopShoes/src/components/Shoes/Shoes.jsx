import React from 'react'
import {shoes} from "../Shoes/lista.js"
import Shoe from './Shoe.jsx'
import { ShoeContainer } from './Shoe'

function Shoes() {
  return (
    <ShoeContainer>
        {shoes.map((prod) => (
          <Shoe nombre={prod.nombre} precio={prod.precio} />
        
   ))}

    </ShoeContainer>
  )
}

export default Shoes