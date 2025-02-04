import styled from "styled-components";




export const AboutContainer = styled.div`
display: flex;
  padding: 10rem 3.3rem;
  gap: 20px;
  width: 100%;
  min-height: 70vh;
  line-height: 45px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: bisque;
  text-align: center;
  @media (max-width: 669px) {
    min-height: 90vh;

    
}
@media (max-width: 1403px) {
    padding: 7rem 1rem;


}

 
`

export const AboutInfo = styled.div`
  display: flex;
  padding-bottom: 50px;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #18191a;
  gap: 55px;
  @media (max-width: 1073px) {
    flex-direction: column;

    
}
 `

export const AboutText =styled.div`
  display: flex;
  width: 50%;
  
  

`

export const AboutImg = styled.div`
display: flex;
height: 350px;
width: 40%;
@media (max-width: 1403px) {
  width: 20%;
  height: 200px;
    
}
@media (max-width: 1400px) {
  display: none;
    
}


`

