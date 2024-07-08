import React from "react";
import { NavbarContainer, NavbarLinks, NavbarLinksContainer } from "./Navbar";

function Navbar() {
  return (
    <div>
      <NavbarContainer>
        <img src="https://res.cloudinary.com/dkdvehyzk/image/upload/v1720457075/topshoesLogo_xi5ukb.png" alt="" />
        <NavbarLinksContainer>
          <NavbarLinks>
            <a href="#">Inicio</a>
            <a href="#">Productos</a>
            <a href="#">Invierno</a>

          </NavbarLinks>
          <img src="https://res.cloudinary.com/dkdvehyzk/image/upload/v1720457115/cesta_omvhgv.png"  alt="" />
        </NavbarLinksContainer>
        
      </NavbarContainer>
    </div>
  );
}

export default Navbar;
