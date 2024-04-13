import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, Routes } from 'react-router-dom'; // Changed Switch to Routes
import Header from './component/Header';
import Store from './component/Store';
import Home from './component/Home';
import Cart from './component/Cart';
import About from './component/About';

function App() {
  return (
    <>
      <Header />
      <Routes> 
        <Route path="/" element={<Home />} /> {/* Added '/' to the path */}
        <Route path="/Store" element={<Store />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/About" element={<About />} />
      </Routes> 
    </>
  );
}

export default App;
