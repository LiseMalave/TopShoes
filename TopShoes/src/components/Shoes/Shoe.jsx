
import { BuyButton, ShoeCard, ShoeContainer, ShoeImg, Space } from './Shoe'
import { shoes } from './lista'


function Shoe({product}) {
  
  return (
    <>
        {product.map((prod) => (
          
        
 
          
            <ShoeContainer>
              
                 <ShoeCard>
                
        <h2>{prod.nombre}</h2>
        <h2>{prod.precio}</h2>
        <ShoeImg>
          <img src={prod.img} alt={prod.id} />
        </ShoeImg>
       
            <BuyButton> Comprar</BuyButton>
            </ShoeCard>
         
            </ShoeContainer>
          
       
 ))}
        
        
    </>
  )
}

export default Shoe