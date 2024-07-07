import React from 'react'
import { ProductCard, ProductContainer, ProductTitle } from './Products'

function Products() {
  return (
    <div>
       <ProductContainer>
        <ProductTitle>Productos Destacados</ProductTitle>
        <ProductCard>
               <p>Productos</p>
        </ProductCard>
     
       </ProductContainer>
    </div>
  )
}

export default Products