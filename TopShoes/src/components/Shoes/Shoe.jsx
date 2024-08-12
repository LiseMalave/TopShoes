import React from 'react'
import { ShoeCard, ShoeContainer, ShoeImg, Space } from './Shoe'

function Shoe({nombre,precio,img}) {
  return (
    <>
        <Space></Space>
            <ShoeContainer>
                 <ShoeCard>
                
        <h2>{nombre}</h2>
        <h2>{precio}</h2>
        <ShoeImg>
          <img src={img} alt={nombre} />
        </ShoeImg>
        
         
            </ShoeCard>
         
            </ShoeContainer>
          

        
        
    </>
  )
}

export default Shoe