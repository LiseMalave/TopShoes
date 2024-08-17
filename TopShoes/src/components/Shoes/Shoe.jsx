
import { BuyButton, ShoeCard, ShoeContainer, ShoeImg, Space } from './Shoe'



function Shoe({nombre,precio,img}) {
  
  return (
    <>
        
        
            <ShoeContainer>
              
                 <ShoeCard>
                
        <h2>{nombre}</h2>
        <h2>{precio}</h2>
        <ShoeImg>
          <img src={img} alt={nombre} />
        </ShoeImg>
        
            <BuyButton> Comprar</BuyButton>
            </ShoeCard>
         
            </ShoeContainer>
          
       

        
        
    </>
  )
}

export default Shoe