import React from 'react'
import { AboutContainer, AboutImg, AboutInfo, AboutText} from './About'
import Footer from '../Footer/Footer.jsx'


function About() {
  return (
    <>
  
    <AboutContainer>
   
   
    <AboutInfo>
      <AboutText>
      <h3>Top Shoes es una Fábrica de Calzado que elabora zapatos para damas, niñas y bebés. Presenta una gama de modelos con una excelente calidad en el Calzado</h3>

      </AboutText>
      <AboutImg><img src="https://res.cloudinary.com/dkdvehyzk/image/upload/v1720456652/samples/imagecon-group.jpg" alt="empresa" /></AboutImg>
      
    </AboutInfo>
    
    </AboutContainer>
    <Footer></Footer>
    </>
  )
}

export default About