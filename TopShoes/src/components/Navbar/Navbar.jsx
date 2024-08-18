import React from "react";

import { NavbarContainer, NavbarLinks, NavbarLinksContainer } from "./Navbar";
import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { MenuContext } from "../context/ContextMenu";

import BurgerButton from "./BurgerButton";
import Cart from "./Cart.jsx";
import { CartContext } from "../context/ContextCart";



function Navbar() {
  const {openMenu, toggleMenu} = useContext(MenuContext);
  const {openCart, toggleCart } = useContext(CartContext);
  console.log(openCart)
  const isOpen = () => {
    if(openCart=== 'active'){
      
    }
  }
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
          <div className={openCart ? 'active' : ''} >
            
          <Cart  openCart={openCart} toggleCart={toggleCart}>
            
             
          </Cart>

         
          
          </div>
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
