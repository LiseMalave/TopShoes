import viteLogo from "/vite.svg";
import Hero from "./components/Hero/Hero.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Products from "./components/Products/Products.jsx";
import Footer from "./components/Footer/Footer.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About.jsx";
import Contac from "./components/Contact/Contact.jsx";
import Shoe from "./components/Shoes/Shoe.jsx";
import Shoes from "./components/Shoes/Shoes.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Layout/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contac" element={<Contac/>}/>
          <Route path="shoes" element={<Shoes/>}/>
        </Route> 
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
