import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  /* background-color: #18191a; */
  justify-content: center;
  padding-top: 10vw;
  gap: 20px;
  /* padding: 50px; */
  
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
  height: 400px;
  border-radius: 10px;
`;
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
