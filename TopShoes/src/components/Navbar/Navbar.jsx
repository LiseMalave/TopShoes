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
            <a href="#">Contacto</a>
          </NavbarLinks>
        </NavbarLinksContainer>
        <img src="src\assets\carro-de-compras-rapido.png"  alt="" srcset="" />
      </NavbarContainer>
    </div>
  );
}

export default Navbar;
