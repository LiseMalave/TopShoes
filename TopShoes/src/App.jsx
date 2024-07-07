import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar.jsx";


function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Layout>

          <Hero></Hero>
        </Layout>
      
      <h1>Vite + React</h1>
      
      

      </div>
    </>
  );
}

export default App;
