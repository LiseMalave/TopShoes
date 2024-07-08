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

       <BannerImg><img src="https://res.cloudinary.com/dkdvehyzk/image/upload/v1720457104/banner_dior6r.png" alt="" /></BannerImg> 
      </BannerContainer>
    </div>
  );
}

export default Banner;
