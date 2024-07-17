import styled from "styled-components";

export const ContactContainer = styled.div`
display: flex;
  padding: 8.3vh 10.2vh;
  margin-top: 2px;
  gap: 20px;
  width: 90%;
  line-height: 45px;
  justify-content: center;
  align-items: center;
  background-color: bisque;
  text-align: center;
  @media (max-width: 751px) {
    padding: 8vh 5vh;
    
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