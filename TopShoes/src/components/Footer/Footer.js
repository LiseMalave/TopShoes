import styled from "styled-components";

export const FooterContainer = styled.div`
display: flex;
/* height: 150px; */
/* min-width: 800px; */
gap: 10px;
justify-content: space-between;
align-items: center;
padding: 1rem 18rem;
background-color: black;
color: white;
@media (max-width: 900px) {
    justify-content: center;
    padding: 1rem;
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