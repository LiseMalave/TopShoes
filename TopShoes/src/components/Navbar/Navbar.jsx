import React from "react";

import { CartNavStyled, NavbarContainer, NavbarLinks, NavbarLinksContainer } from "./Navbar";
import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { MenuContext } from "../context/ContextMenu";

import BurgerButton from "./BurgerButton";


import CartIcon from "./CartIcon/CartIcon.jsx";
import ModalCart from "./ModalCart/ModalCart.jsx";
import { CartContext } from "../context/ContextCart.jsx";



function Navbar() {
  const {openMenu, toggleMenu} = useContext(MenuContext);
  const {openCart, toggleCart} =useContext(CartContext);

 
  return (
    <div>
    <nav>
     
      <NavbarContainer>
    
        <img src="https://res.cloudinary.com/dkdvehyzk/image/upload/v1720457075/topshoesLogo_xi5ukb.png" alt="" />
        <NavbarLinksContainer>
          <NavbarLinks className={openMenu ? 'active' : ''}>
            <Link to="/">Inicio</Link>
            <Link to="about">About</Link>
            <Link to="shoes">Productos</Link>
            <Link to="contac">Contacto</Link>
            

          </NavbarLinks>
                      
          <CartNavStyled >
            <CartIcon/> 
                     
          </CartNavStyled>
           <ModalCart openCart={openCart} toggleCart={toggleCart}/>  
         
          

        </NavbarLinksContainer>
        <div className="toggleBurger">
        <BurgerButton openMenu={openMenu} toggleMenu={toggleMenu}/>

        </div>
      </NavbarContainer>
    </nav>
    <Outlet/>
    </div>
  );
}

export default Navbar;
