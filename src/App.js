import React, {useState} from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { productData, productDataTwo } from './components/Products/data'
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import GoTop from "./components/GoTop/goTop";

function App() {

  const [menuState, setMenuState] = useState(false);
  const handleCloseMenu = () => setMenuState(false);
  const handleOpenMenu = () => setMenuState(true);

  return (
    <>
      <Router>
        <GlobalStyle />
        <GoTop />
        <Navbar openMenu={handleOpenMenu}/>
        <Hero />
        <Sidebar menuState={menuState} closeMenu={handleCloseMenu}/>
        <Products id="pizza" heading='Pizza' data={productData}/>
        <Feature />
        <Products id="dessert" heading='Dessert' data={productDataTwo}/>
        <Footer />
      </Router>
    </>
  );
}

export default App;
