// App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Store from './component/Store';
import Home from './component/Home';
import Cart from './component/Cart';
import About from './component/About';

function App() {
  const [cartItems, setCartItems] = useState([]); // Set initial state to an empty array
  const [showProducts, setShowProducts] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const addToCart = (product) => {
    const updatedCartItems = [...cartItems];
    const existingItemIndex = updatedCartItems.findIndex(item => item.title === product.title);
    
    if (existingItemIndex !== -1) {
      // If item exists, update quantity
      updatedCartItems[existingItemIndex] = {
        ...updatedCartItems[existingItemIndex],
        quantity: updatedCartItems[existingItemIndex].quantity + 1
      };
    } else {
      // If item does not exist, add to cart
      updatedCartItems.push({ ...product, quantity: 1 });
    }
    
    setCartItems(updatedCartItems);
  };
  
  
  
  
  

  const removeItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <Header 
        onStoreClick={() => {setShowProducts(true); setShowHome(false); setShowCart(false); setShowAbout(false);}} 
        onCartClick={() => {setShowCart(true); setShowHome(false); setShowProducts(false); setShowAbout(false);}} 
        onHomeClick={() => {setShowHome(true); setShowProducts(false); setShowCart(false); setShowAbout(false);}} 
        onAboutClick={() => {setShowAbout(true); setShowHome(false); setShowProducts(false); setShowCart(false);}} 
      />
      {showHome && <Home />}
      {showAbout && <About />}
      {showProducts && <Store addToCart={addToCart} />}
      {showCart && <Cart cartItems={cartItems} removeItem={removeItem} />}
    </div>
  );
}

export default App;
