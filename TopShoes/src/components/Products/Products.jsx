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
            <img src="src\assets\botas.jpg" alt="" />
          </CardImg>

          <CardInfo>
            <p>Bratze 002 </p>
            <p>$ 27.990</p>
          </CardInfo>
        </ProductCard>
        <ProductCard>
          <CardImg>
            <img src="src\assets\nike.jpg" alt="" />
          </CardImg>

          <CardInfo>
            <p>Nike tokio</p>
            <p>$ 37.990</p>
          </CardInfo>
        </ProductCard>
      </ProductContainer>
    </div>
  );
}

export default Products;
