import React from 'react'
import { ShoeCard, ShoeContainer, Space } from './Shoe'

function Shoe({nombre,precio}) {
  return (
    <>
        <Space></Space>
            <ShoeContainer>
                 <ShoeCard>
                
        <h2>{nombre}</h2>
        <h2>{precio}</h2>
       
         
            </ShoeCard>
         
            </ShoeContainer>
          

        
        
    </>
  )
}

export default Shoe