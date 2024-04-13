import React from 'react';
import {  Navbar, Nav } from 'react-bootstrap';
import Cart from './Cart'; // Import the Cart component

const Header = () => {
  return (
    <div>
    <Navbar bg="black" variant="black" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-center">
        <Nav>
          <Nav.Link href="/" style={{ fontFamily: 'Algerian', fontSize: '20px', color: 'yellow' }}>
            HOME
          </Nav.Link>
          <Nav.Link href="/Store" style={{ fontFamily: 'Algerian', fontSize: '20px', color: 'yellow' }}>
            STORE
          </Nav.Link>
          <Nav.Link href="/About" style={{ fontFamily: 'Algerian', fontSize: '20px', color: 'yellow' }}>
            ABOUT
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      {/* <Navbar>
        <Nav.Link href="" style={{ fontFamily: 'Algerian', fontSize: '20px', color: 'yellow' }}>
            <Cart />
        </Nav.Link>
      </Navbar> */}
    </Navbar>
    {/* <div style={{ borderBottom: '2px solid white' }} /> */}
    </div>
  );
};

export default Header;