import React from 'react';
import { Container } from 'react-bootstrap';

function About() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="bg-dark text-center">
        <h1 className="mt-5 mb-3" style={{ fontFamily: 'Algerian', fontWeight: 'bold', fontSize: '80px', color: 'yellow' }}>Sale Spot</h1>
      </div>
      <Container className="bg-white p-3 flex-grow-1">
        <h2>About</h2>
        <p>About our company...</p>
      </Container>
    </div>
  );
}

export default About;
