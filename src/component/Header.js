// import React from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
// import Cart from './Cart'; // Import the Cart component

// const Header = ({ onStoreClick }) => {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       {/* Left side: The Genrics */}
      
//       {/* Right side: HOME, STORE, ABOUT, Cart */}
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse className="justify-content-center">
//         <Nav>
//           <Nav.Link href="/home" >HOME</Nav.Link> 
//           <Nav.Link onClick={onStoreClick}>STORE</Nav.Link> 
//           {/* <Navbar.Brand href="#" className="font-algerian text-white" style={{ fontFamily: 'Algerian', fontWeight: 'bold', fontSize: '50px' }}>The Generics</Navbar.Brand> */}
//           <Nav.Link href="/about">ABOUT</Nav.Link> 
//         </Nav>
//       </Navbar.Collapse>
//       <Cart />
//     </Navbar>
//   );
// };

// export default Header;
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Cart from './Cart'; // Import the Cart component

const Header = ({ onStoreClick, onHomeClick, onAboutClick }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-center">
        <Nav>
          <Nav.Link onClick={onHomeClick}>HOME</Nav.Link> 
          <Nav.Link onClick={onStoreClick}>STORE</Nav.Link> 
          <Nav.Link onClick={onAboutClick}>ABOUT</Nav.Link> 
        </Nav>
      </Navbar.Collapse>
      <Cart />
    </Navbar>
  );
};

export default Header;
