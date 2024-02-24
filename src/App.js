import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Store from './component/Store';
import Home from './component/Home';
import Cart from './component/Cart';
import About from './component/About'; // Import the About component

function App() {
  const [showProducts, setShowProducts] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showHome, setShowHome] = useState(true); // Default to showing Home
  const [showAbout, setShowAbout] = useState(false); // Default to hiding About

  const handleProductsClick = () => {
    setShowProducts(!showProducts);
    setShowCart(false); 
    setShowHome(false);
    setShowAbout(false);
  };

  const handleCartClick = () => {
    setShowCart(!showCart);
    setShowProducts(false); 
    setShowHome(false);
    setShowAbout(false);
  };

  const handleStoreClick = () => {
    setShowProducts(true);
    setShowCart(false);
    setShowHome(false);
    setShowAbout(false);
  };

  const handleHomeClick = () => {
    setShowHome(true);
    setShowProducts(false);
    setShowCart(false);
    setShowAbout(false);
  };

  const handleAboutClick = () => {
    setShowAbout(true);
    setShowHome(false);
    setShowProducts(false);
    setShowCart(false);
  };

  return (
    <div>
      <Header 
        onStoreClick={handleStoreClick} 
        onCartClick={handleCartClick} 
        onHomeClick={handleHomeClick} 
        onAboutClick={handleAboutClick} 
      />
      {showHome && <Home />}
      {showAbout && <About />}
      {showProducts && <Store />} 
      {showCart && <Cart />}
    </div>
  );
}

export default App;
