import React from 'react'
import { HeroContainer,HeroButton,HeroInfo, SpanHero, HeroImg } from './HeroStyles'

function Hero() {
  return (
    <div>
          <HeroContainer>
        <HeroInfo>
            <h1>Buscamos las mejores tendencias y las traemos para <SpanHero>ti! </SpanHero>
            </h1>
            <p>Vanguardia en calzado femenino</p>
            <p>Encuentra los diseños más modernos.</p>
            <HeroButton>Ver más</HeroButton>
        </HeroInfo>
        <HeroImg><img src="https://res.cloudinary.com/dkdvehyzk/image/upload/v1720457086/s_kuacm1.png" alt="" /></HeroImg>
      
      </HeroContainer>
        
    </div>
    
  )
}

export default Hero