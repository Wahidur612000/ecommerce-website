import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="bg-dark text-center">
        <h1 className="mt-5 mb-3" style={{ fontFamily: 'Algerian', fontWeight: 'bold', fontSize: '60px', color: 'yellow' }}>
          Sale Spot
        </h1>
      </div>
      <div className="bg-white" style={{ height: '2px' }} />
      <Container className="bg-white flex-grow-1">
        <h1>Welcome to our store!</h1>
        <p>This is the homepage of our store. Browse through our products and enjoy your shopping experience!</p>
      </Container>
    </div>
  );
};

export default Home;
