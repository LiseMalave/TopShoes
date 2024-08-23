import styled from "styled-components";
import { motion } from "framer-motion";

export const NavbarContainer = styled.div`
/* height: 47px; */
display: flex;
width: 100%;
position: fixed;
justify-content: space-around;
align-items: center;
padding: 1rem;
background-color: black;
color: white;
@media (max-width: 1551px) {
    padding: 1rem 2rem;
    justify-content: space-around;
    gap: 20px;

  }
  @media (max-width: 500px) {
    gap: 10px;
    padding: 1rem 0;
    
   

  }
  
  
  .toggleBurger{
    @media (min-width: 768px) {
    display: none;
  }
  }
  .cartToggle{
    background-color: transparent;
    cursor: pointer;
  }
  .cart{
    cursor: pointer;
  }

`

export const NavbarLinks = styled.div`
display: flex;
gap: 20px;
padding: 15px;
color: white;
&.active{
  position: absolute;
    display: flex;
    top: 102px;
    left: 50%;
    right: 5%;
    width: 90%;
    flex-direction: column;
    background: -webkit-linear-gradient(to right, #ee9ca7, #ffdde1); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #ee9ca7, #ffdde1); 
    border: 2px solid #000;
    border-top: 0px;
    border-radius: 0px 0px 15px 15px;
    align-items: flex-start;
    padding: 45px 30px;
    gap: 25px;
    z-index: 2;
}
@media (max-width: 768px) {
   
   display: none;

  }



`


export const NavbarLinksContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: white;


`

export const CartContainer = styled.div`





`
export const CartInfo = styled.div`
display: none;

`


//para el cart
export const CartNavStyled = styled.div`
  position: relative;
  cursor: pointer;

  span {
    position: absolute;
    top: 2px;
    left:25px;
    

    height: 20px;
    width: 20px;
    text-align: center;

    border-radius: 1rem;
    border: 2px solid white;
    color: black;
    background-color: bisque;
    font-size: 0.9rem;
  }
`;
export const CartButton = styled.button`
background-color: transparent;
border: none;
border-radius: 60%;
cursor: pointer;

&.active{
  position: absolute;
    display: flex;
    top: 0;
    left: 50%;
    right: 5%;
    width: 49%;
    height: calc(107vh - 65px);
    flex-direction: column;
    background: -webkit-linear-gradient(to right, rgba(227,177,169), #ffdde1); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, rgba(227,177,169), #ffdde1); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border: 2px solid #000;
    border-top: 0px;
    border-radius: 0px 0px 15px 15px;
    align-items: flex-start;
    padding: 45px 30px;
    gap: 25px;
    /* transform: translate(200%); */
    z-index: 2;
    overflow-y: scroll;
}




`
export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: calc(100vw - 450px);
  height: 100vh;

 
`;


export const LinksContainerStyled = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  a {
    padding: 1rem 1.5rem;
  }

  a:first-child {
    background: var(--orange-bg);
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
`;


