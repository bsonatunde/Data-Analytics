import React from "react";
import Analytics from "./components/Analytics";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Analytics/>
     <Cards/>
     <Newsletter/>
     <Footer/>
    </div>
  );
}

export default App;
