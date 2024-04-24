import React , { useContext }from 'react';
import {  Navbar, Nav } from 'react-bootstrap';
import CartContext from './Context/Cart-Context';

const Header = () => {
 
  const headerctx=useContext(CartContext);
  const isLoggedIn=headerctx.isLoggedIn;
  
  
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
          <Nav.Link href="/Contact-Us" style={{ fontFamily: 'Algerian', fontSize: '20px', color: 'yellow' }}>
            Contact US
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar>
      {!isLoggedIn && 
        <Nav.Link href="/Login" style={{ fontFamily: 'Algerian', fontSize: '20px', color: 'yellow' }}>
        Login
        </Nav.Link>
      }
      {isLoggedIn && 
        <Nav.Link href="/Login" style={{ fontFamily: 'Algerian', fontSize: '20px', color: 'yellow' }}>
        Logout
        </Nav.Link>
      }
            {/* <Nav.Link href="/Login" style={{ fontFamily: 'Algerian', fontSize: '20px', color: 'yellow' }}>
              Logout
            </Nav.Link> */}

      </Navbar>
    </Navbar>
    {/* <div style={{ borderBottom: '2px solid white' }} /> */}
    </div>
  );
};

export default Header;