import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Cart from './Cart'; // Import the Cart component

const Header = ({ onStoreClick, onHomeClick, onAboutClick }) => {
  return (
    <div>
    <Navbar bg="black" variant="black" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-center">
        <Nav>
          <Nav.Link onClick={onHomeClick} style={{ fontFamily: 'Algerian', fontSize: '20px', color: 'yellow' }}>
            HOME
          </Nav.Link>
          <Nav.Link onClick={onStoreClick} style={{ fontFamily: 'Algerian', fontSize: '20px', color: 'yellow' }}>
            STORE
          </Nav.Link>
          <Nav.Link onClick={onAboutClick} style={{ fontFamily: 'Algerian', fontSize: '20px', color: 'yellow' }}>
            ABOUT
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Cart />
    </Navbar>
    <div style={{ borderBottom: '2px solid white' }} />
    </div>
  );
};

export default Header;