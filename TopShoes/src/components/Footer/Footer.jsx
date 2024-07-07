import React from 'react'
import { FooterContainer, FooterImg, FooterInfo } from './Footer'

function Footer() {
  return (
    <div>
        <FooterContainer>
            <FooterImg> 
                <img src="src\assets\Facebook_Square_icon-icons.com_49948.png" alt="facebook" />
                 <img src="src\assets\instagram_ig_insta_icon_190937.png " alt='instagram' />
            </FooterImg>
            <FooterInfo><h4>Copyright Lisette Malave</h4></FooterInfo>
        </FooterContainer>

    </div>
  )
}

export default Footer