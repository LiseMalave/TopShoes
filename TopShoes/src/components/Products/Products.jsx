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
            <h3>Bratze 002 </h3>
            <p>$ 27.990</p>
          </CardInfo>
        </ProductCard>
        <ProductCard>
          <CardImg>
            <img src="src\assets\nike.jpg" alt="" />
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
