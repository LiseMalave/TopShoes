
import viteLogo from "/vite.svg";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar.jsx";
import Products from "./components/Products/Products.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Banner from "./components/Banner/Banner.jsx";


function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Layout>

          <Hero/>
          <Products/>
          <Banner/>
        </Layout>

      <Footer/>      
        
      

      </div>
    </>
  );
}

export default App;
