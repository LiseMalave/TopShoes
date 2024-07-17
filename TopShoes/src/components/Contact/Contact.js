import styled from "styled-components";

export const ContactContainer = styled.div`
display: flex;
  padding: 8rem 3.4rem;
  min-height: 73.3vh;
  gap: 20px;
  width: 100%;
  line-height: 45px;
  justify-content: center;
  align-items: center;
  background-color: bisque;
  text-align: center;
  @media (max-width: 1086px) {
   min-height: 85vh;
    
}
@media (max-width: 489px) {
   min-height: 108vh;
   padding: 5rem 3.4rem;
    
}


`
export const ContactText = styled.div`
display: flex;
text-align: center;
justify-content: center;
`

export const ContactInfo = styled.div`
display: flex;
flex-direction: column;
padding: 5vh;
@media (max-width: 396px) {
   padding: 1rem;
    
  }
`

export const ContactForm = styled.form`
display: flex;
flex-direction: column;
gap: 10px;
flex-wrap: wrap;
justify-content: center;

`
export const ContactButton = styled.button`
 background-color: var(--orange-bg); 
 border-radius: 10px;
  padding: 5px 1rem;
`