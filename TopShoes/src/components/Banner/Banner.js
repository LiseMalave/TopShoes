import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  line-height: 25px;
  justify-content: center;
  gap: 30px;
  padding: 2rem;
  width: 100%;
  background-color: bisque;
  @media (max-width: 1286px) {
    justify-content: center;
  }
  /* @media (max-width: 1286px) {
    justify-content: space-around
    


  } */
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
`;
