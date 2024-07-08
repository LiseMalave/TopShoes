import React from "react";
import { BannerContainer, BannerImg, BannerInfo } from "./Banner";

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

       <BannerImg><img src="src\assets\banner.png" alt="" /></BannerImg> 
      </BannerContainer>
    </div>
  );
}

export default Banner;
