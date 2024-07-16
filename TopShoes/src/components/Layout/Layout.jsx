import React from 'react'
import { LayoutContainer } from './Layout'
import Hero from '../Hero/Hero.jsx'
import Banner from '../Banner/Banner.jsx'
import Products from '../Products/Products.jsx'
import Footer from '../Footer/Footer.jsx'
import Navbar from '../Navbar/Navbar.jsx'


function Layout() {
  return (
    <div>
    <LayoutContainer>
    <Hero/>
    <Products/>
    <Banner/>
    <Footer/>
    </LayoutContainer>
    </div>
  )
}

export default Layout