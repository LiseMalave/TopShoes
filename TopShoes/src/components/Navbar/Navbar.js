import styled from "styled-components";

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
background-color: black;
border: 20px solid #e3b1a9;




`

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
    width: 90%;
    height: calc(107vh - 65px);
    flex-direction: column;
    background: -webkit-linear-gradient(to right, rgba(227,177,169,0.61), #ffdde1); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, rgba(227,177,169,0.61), #ffdde1); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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


