import React,{useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, Routes } from 'react-router-dom'; // Changed Switch to Routes
import Header from './component/Header';
import Store from './component/Store';
import Home from './component/Home';
import Cart from './component/Cart';
import About from './component/About';
import ContactUs from './component/ContactUS';
import Login from './component/login/Login';
import CartContext from './component/Context/Cart-Context';

function App() {
  const appctx=useContext(CartContext);
  const isLoggedIn=appctx.isLoggedIn;
  return (
    <>
      <Header />
      <Routes> 
        <Route path="/" element={<Home />} /> 
        {isLoggedIn && <Route path="/Store" element={<Store />} /> }
        {!isLoggedIn && <Route path="/Store" element={<Store />} />  }
        <Route path="/Cart" element={<Cart />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact-Us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
      </Routes> 
    </>
  );
}

export default App;
