import React from 'react'
import { FooterContainer, FooterImg, FooterInfo } from './Footer'

function Footer() {
  return (
    <div>
        <FooterContainer>
            <FooterImg> 
                <img src="src\assets\facebook.png" alt="facebook" />
                 <img src="src\assets\instagram.png " alt='instagram' />
            </FooterImg>
            <FooterInfo><h4>Copyright Lisette Malave</h4></FooterInfo>
        </FooterContainer>

    </div>
  )
}

export default Footer