import React from "react";
import { BannerContainer, BannerInfo } from "./Banner";

function Banner() {
  return (
    <div>
      <BannerContainer>
        <BannerInfo>
          <h2>Descubre nuestra nueva colección</h2>

          <p>
            Encuentra los zapatos femeninos más modernos y de vanguardia en
            nuestra tienda online. Tenemos una amplia variedad
            de estilos y diseños para satisfacer tus gustos y necesidades.
          </p>
         
        </BannerInfo>

        <img src="src\assets\banner.png" alt="" />
      </BannerContainer>
    </div>
  );
}

export default Banner;
