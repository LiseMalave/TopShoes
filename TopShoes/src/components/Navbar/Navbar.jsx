import React from "react";

import { NavbarContainer, NavbarLinks, NavbarLinksContainer } from "./Navbar";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
    <nav>
      <NavbarContainer>
        <img src="https://res.cloudinary.com/dkdvehyzk/image/upload/v1720457075/topshoesLogo_xi5ukb.png" alt="" />
        <NavbarLinksContainer>
          <NavbarLinks>
            <Link to="/">Inicio</Link>
            <Link to="about">About</Link>
            <Link to="productos">Productos</Link>
            <Link to="contac">Contacto</Link>
            

          </NavbarLinks>
          <img src="https://res.cloudinary.com/dkdvehyzk/image/upload/v1720457115/cesta_omvhgv.png"  alt="" />
        </NavbarLinksContainer>
        
      </NavbarContainer>
    </nav>
    <Outlet/>
    </>
  );
}

export default Navbar;
