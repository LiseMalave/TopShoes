import React from "react";
import { NavbarContainer, NavbarLinks, NavbarLinksContainer } from "./Navbar";

function Navbar() {
  return (
    <div>
      <NavbarContainer>
        <img src="src\assets\topshoesLogo.png" alt="" />
        <NavbarLinksContainer>
          <NavbarLinks>
            <a href="#">Inicio</a>
            <a href="#">Productos</a>
            <a href="#">Invierno</a>

          </NavbarLinks>
          <img src="src\assets\cesta.png"  alt="" srcset="" />
        </NavbarLinksContainer>
        
      </NavbarContainer>
    </div>
  );
}

export default Navbar;
