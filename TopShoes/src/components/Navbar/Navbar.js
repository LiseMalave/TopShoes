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
    top: 80px;
    left: 50%;
    right: 5%;
    width: 90%;
    flex-direction: column;
    background-color: #f454;
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


