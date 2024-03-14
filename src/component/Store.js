// Store.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

const Store = ({ addToCart }) => {
  return (
    <div>
      <div className="d-flex flex-column">
        <div className="bg-dark text-center">
          <h1 className="mt-5 mb-3" style={{ fontFamily: 'Algerian', fontWeight: 'bold', fontSize: '80px', color: 'yellow' }}>
            Sale Spot
          </h1>
        </div>
        <div className="bg-white" style={{ height: '2px' }}></div>
      </div>

      <Container className="bg-white p-3">
        <h1 className="mt-5 mb-3 text-center" style={{ fontFamily: 'Algerian', fontSize: '40px' }}>Products</h1>
        <Row>
          {productsArr.map((product, index) => (
            <Col key={index} xs={12} md={6} lg={6} className="mb-4">
              <Card>
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>Rs {product.price}</Card.Text>
                  <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Store;
