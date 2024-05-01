import React,{useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, Routes,Navigate } from 'react-router-dom'; // Changed Switch to Routes
import Header from './component/Header';
import Store from './component/Store';
import Home from './component/Home';
import Cart from './component/Cart';
import About from './component/About';
import ContactUs from './component/ContactUS';
import Login from './component/login/Login';
import CartContext from './component/Context/Cart-Context';
import ProfilePage from './component/login/ProfilePage';

function App() {
  const appctx=useContext(CartContext);
  const isLoggedIn=appctx.isLoggedIn;
  
  return (
    <>
      <Header />
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/Store" element={isLoggedIn ? <Store /> : <Navigate to="/Login" />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact-Us" element={<ContactUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path='*' element={<Home />}></Route>
      </Routes> 
    </>
  );
}

export default App;
