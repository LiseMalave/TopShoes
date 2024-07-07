import React from 'react'
import { HeroContainer,HeroButton,HeroInfo } from './HeroStyles'

function Hero() {
  return (
    <div>
          <HeroContainer>
        <HeroInfo>
            <h1>Descubre los últimos modelos de zapatos</h1>
            <p>Buscamos las mejores tendencias y las traemos para ti!  </p>
            <p>Encuentra los zapatos más cómodos en nuestra tienda online.</p>
            <HeroButton>Ver más</HeroButton>
        </HeroInfo>
      <img src="src\assets\s.png" alt="" />
      </HeroContainer>
        
    </div>
    
  )
}

export default Hero