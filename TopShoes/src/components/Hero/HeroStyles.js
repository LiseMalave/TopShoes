import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  margin-top: 10vh;
  justify-content: center;
  padding-top: 2rem;
  gap: 20px;
  width: 100%;
 

  /* padding: 50px; */
  @media (max-width: 1286px) {
    background-color: transparent;
  


  }

  
`;
export const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #18191a;
  gap: 10px;
  width: 25%;
  border-radius: 10px;

  @media (max-width: 1286px) {
    
    width: 100%;
    
    
    

  }
`;
export const HeroImg = styled.div`

@media (max-width: 1286px) {
    justify-content: center;
    display: none;
} 
`

export const HeroButton = styled.button`
width: 10em;
  background-color: var(--orange-bg);
  border-radius: 10px;
  padding: 5px 1rem;
  color: white;
  border: none;
`;
export const SpanHero =styled.span` 
color: pink;
width: 20px;
`
