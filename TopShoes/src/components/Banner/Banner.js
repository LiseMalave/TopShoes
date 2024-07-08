import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  line-height: 25px;
  justify-content: center;
  gap: 30px;
  padding: 2rem;
  background-color: bisque;
  border: 1px solid red;
  @media (max-width: 1286px) {
    justify-content: center;
  }
  @media (max-width: 900px) {
    
    padding: 50px;


  } 
`;
export const BannerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #18191a;
  gap: 15px;
  width: 20%;
  @media (max-width: 1286px) {
    display: none;
  }
`;
export const BannerImg = styled.div`
  border-radius: 5px;
  display: flex;
  justify-content: center;
  @media (max-width: 900px) {
    width: 300px;
    height: 200px;
    justify-content: center;
    padding-right:60px;
    
  }
  @media (max-width: 500px) {
    width: 100px;
    height: 150px;
    justify-content: center;
    padding-right:0px;
    
  }
`;
