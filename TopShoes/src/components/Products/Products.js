import styled from "styled-components";

export const ProductContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 10px;
padding: 3em;
flex-wrap: wrap;
gap: 20px;


`


export const ProductTitle = styled.h2`
    display:flex;
    justify-content: center;
    padding: 1em;
    border: 1px solid #f2f2f4;
`
export const ProductCard = styled.div`
    display: flex;
    /* flex-wrap: wrap; */
    gap: 2px;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 1200px) {
    
    justify-content: center;
    

    
  }
`
export const CardInfo = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;

` 
  export const CardImg = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 900px) {
  
    height: 55%;
    
    
    
  }

`