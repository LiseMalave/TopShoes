
import {shoes} from "../Shoes/lista.js"
import Shoe from './Shoe.jsx'
import { ShoeContainer, Space,ButtonContainer, Headline } from './Shoe'
import { ButtonCategory } from "./ButtonCategory.jsx"
import { useState } from "react"


function Shoes() {
  const allCategories = ['All', ... new Set(shoes.map(shoe => shoe.categoria))];
  const [categories, setCategories] = useState(allCategories);
  return (
  <>
    <Space></Space>
    <Headline>
      <h1>Categorias</h1> 
    </Headline>
    <ButtonContainer>
     
 <ButtonCategory categories={categories}></ButtonCategory>
    </ButtonContainer>
     
    
     <ShoeContainer>
    
      
        {shoes.map((prod) => (
          <Shoe nombre={prod.nombre} precio={prod.precio} img={prod.img}/>
        
   ))}

    </ShoeContainer>
  </>
 
  )
}

export default Shoes