import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Cart from './Cart'; // Import the Cart component

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      {/* Left side: The Generics */}
      <Navbar.Brand href="#" className="font-algerian text-white">The Generics</Navbar.Brand>
      
      {/* Right side: HOME, STORE, ABOUT, Cart */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link href="#">HOME</Nav.Link> {/* HOME link */}
          <Nav.Link href="#">STORE</Nav.Link> {/* STORE link */}
          <Nav.Link href="#">ABOUT</Nav.Link> {/* ABOUT link */}
          <Cart /> {/* Cart component */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
