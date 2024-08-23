import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { MdOutlineClose } from "react-icons/md";
import {IoMdTrash} from "react-icons/io";
import { ModalOverlayStyled } from "../Navbar.js";
import {
  ContainerStyled,
  MainContainerStyled,
  CloseButtonContainerStyled,
  CloseButtonStyled,
  TitleStyled,
  ProductsWrapperStyled,
  TotalStyled,
  PriceContainerStyled,
  SubtotalStyled,
  EnvioStyled,
  PriceStyled,
  ButtonContainerStyled
} from "./ModalCart.js";

import { CartButton } from "../Navbar.js";



function ModalCart(props) {

   
 
    const [hiddenCart, setHiddenCart] = useState(true);

    const toggleCart = () => {
      setHiddenCart(prevOpenMenu => !prevOpenMenu)
      console.log(hiddenCart)
    };

  return (
    <>
         
    
      <AnimatePresence>
      <ContainerStyled    
        initial={{ translateX: 600 }}
        animate={{ translateX: 0 }}
        exit={{ translateX: 600 }}
        transition={{ type: "spring", damping: 27 }}
        key="cart-modal" 
        onClick={props.toggleCart} className= {`${props.openCart ? "active" : ""}`}
        
        >
        
        <CloseButtonContainerStyled>
          <CloseButtonStyled
            className="close__modal "
            whileTap={{ scale: 0.95 }}
            onClick={() =>toggleCart()}
          >
            <MdOutlineClose size="24px" />
          </CloseButtonStyled>
        </CloseButtonContainerStyled>

        <MainContainerStyled>
          <TitleStyled>
            <h1>Tus Productos</h1>
          </TitleStyled>
          <IoMdTrash />
          <ProductsWrapperStyled>
            <p>El carrito esta vacío</p>
          </ProductsWrapperStyled>
        </MainContainerStyled>
        <PriceContainerStyled>
          <SubtotalStyled>
            <p>Subtotal:</p>
            <span>1000</span>
          </SubtotalStyled>
          <EnvioStyled>
            <p>Envio</p>
            <span>500</span>
          </EnvioStyled>
          <hr />
          <TotalStyled>
            <p>Total:</p>
            <PriceStyled>total</PriceStyled>
          </TotalStyled>
          <ButtonContainerStyled>
           
          <CartButton >Iniciar pedido</CartButton>
          {/* onClick={props.toggleCart} className= {`${props.openCart ? "active" : ""}`} */}
          </ButtonContainerStyled>
        </PriceContainerStyled>
      </ContainerStyled>
    
      </AnimatePresence>
      
    </>
  );
};

export default ModalCart;
