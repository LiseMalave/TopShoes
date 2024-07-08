import React from "react";
import {
  CardImg,
  CardInfo,
  ProductCard,
  ProductContainer,
  ProductTitle,
} from "./Products";

function Products() {
  return (
    <div>
      <ProductTitle>Productos Destacados</ProductTitle>
      <ProductContainer>
        <ProductCard>
          <CardImg>
            <img src="https://pixabay.com/photos/boots-railroad-tracks-railway-shoes-181744/" alt="" />
          </CardImg>

          
            <CardInfo>
            <h3>Bratze 002 </h3>
            <p>$ 27.990</p>
          </CardInfo>
        </ProductCard>
        <ProductCard>
          <CardImg>
            <img src="https://drive.google.com/file/d/1_4h__WdnaO_x9X0OfQ4T21KJNFGCmZed/view?usp=sharing" alt="" />
          </CardImg>

          <CardInfo>
            <h3>Nike tokio</h3>
            <p>$ 37.990</p>
          </CardInfo>
        </ProductCard>
      </ProductContainer>
    </div>
  );
}

export default Products;
