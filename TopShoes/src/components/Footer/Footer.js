import styled from "styled-components";

export const FooterContainer = styled.div`
display: flex;
gap: 100px;
justify-content: center;
align-items: center;
padding: 1rem 3.3rem; 
width: 100%;
background-color: black;
color: white;

/* @media (max-width: 900px) {
    /* justify-content: center; */
    /* padding: 1rem 3.3rem; 
    gap: 80px;
    
  } */
  @media (max-width: 500px) {
    justify-content: center;
    /* padding: 0rem; */
    gap: 80px;
    
  }
`

export const FooterImg = styled.div`
display:flex;
gap: 5px;
width: 25px;

`

export const FooterInfo = styled.div`
display: flex;
`