import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  /* background-color: #18191a; */
  justify-content: center;
  
  padding: 50px;
  
`;
export const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #18191a;
  gap: 15px;
  width: 20%;
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
