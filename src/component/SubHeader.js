import React from 'react';
import {  Navbar, Nav } from 'react-bootstrap';
import Cart from './Cart'; 

const SubHeader = () => {
  return (
    <div className="justify-content-center">
    
    <Navbar bg="dark" variant="black" expand="lg">
    <h1 className="mt-5 mb-3" style={{ fontFamily: 'Algerian', fontWeight: 'bold', fontSize: '60px', color: 'yellow' }}>
            Sale Spot
          </h1>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-center">
        
      </Navbar.Collapse>
      <Navbar>
        <Nav.Link href="" style={{ fontFamily: 'Algerian', fontSize: '20px', color: 'yellow' }}>
            <Cart />
        </Nav.Link>
      </Navbar>
    </Navbar>
    <div style={{ borderBottom: '2px solid white' }} />
    </div>
  );
};

export default SubHeader;