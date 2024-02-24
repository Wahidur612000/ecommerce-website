import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { cartElements } from './Cart'; // Import cartElements from Cart component

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

const ProductsScreen = () => {
  const handleAddToCart = (product) => {
    // Add product to cartElements array (you need to implement this logic)
    console.log("Product added to cart:", product);
  };

  return (
    <Container>
      <h1 className="mt-5 mb-3">Products</h1>
      <Row>
        {productsArr.map((product, index) => (
          <Col key={index} xs={12} md={6} lg={6} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="primary" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsScreen;
