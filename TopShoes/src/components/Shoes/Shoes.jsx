
import {shoes} from "../Shoes/lista.js"
import Shoe from './Shoe.jsx'
import { ShoeContainer, Space,ButtonContainer, Headline } from './Shoe'
import { ButtonCategory } from "./ButtonCategory.jsx"
import { useState } from "react"


function Shoes() {
  const allCategories = ['All', ... new Set(shoes.map(shoe => shoe.categoria))];
  const [categories, setCategories] = useState(allCategories);
 const [product, setProduct] =useState(shoes)
  const filterCategory = (categories) =>{
    
    if (categories === 'All'){
      setProduct(shoes)
      
      return
    } 
    const filteredData = shoes.filter(sho => sho.categoria === categories);
   
		setProduct(filteredData)
  }
  return (
  <>
    <Space></Space>
    <Headline>
      <h1>Categorias</h1> 
    </Headline>
    <ButtonContainer>
     
    <ButtonCategory categories={categories} filterCategory={filterCategory}></ButtonCategory>
    </ButtonContainer>
     
    
     <ShoeContainer>
    <Shoe product={product}></Shoe>
      
        

    </ShoeContainer>
  </>
 
  )
}

export default Shoes