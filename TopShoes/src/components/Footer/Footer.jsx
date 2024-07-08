import React from 'react'
import { FooterContainer, FooterImg, FooterInfo } from './Footer'

function Footer() {
  return (
    <div>
        <FooterContainer>
            <FooterImg> 
                <img src="https://res.cloudinary.com/dkdvehyzk/image/upload/v1720457127/facebook_nyqqoy.png" alt="facebook" />
                 <img src="https://res.cloudinary.com/dkdvehyzk/image/upload/v1720457137/instagram_adfrkt.png" alt='instagram' />
            </FooterImg>
            <FooterInfo><h4>Copyright Lisette Malave</h4></FooterInfo>
        </FooterContainer>

    </div>
  )
}

export default Footer