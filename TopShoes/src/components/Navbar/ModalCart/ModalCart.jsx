import React from "react";
import { MdOutlineClose } from "react-icons/md";
import {IoMdTrash} from "react-icons/io";
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

function ModalCart() {
  return (
    <>

      <ContainerStyled hidden={true} >
        <CloseButtonContainerStyled>
          <CloseButtonStyled
            className="close__modal "
            whileTap={{ scale: 0.95 }}
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
    </>
  );
}

export default ModalCart;
