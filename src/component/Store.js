import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useContext } from 'react';
import CartContext from './Context/Cart-Context';
import SubHeader from './SubHeader';
import classes from "./Store.module.css";
import Footer from './Footer';

const productsArr = [
  {
    id:1,
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 1,
  },
  {
    id:2,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 1,
  },
  {
    id:3,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
  },
  {
    id:4,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    quantity: 1,
  },
];

const Store = () => {
  const StoreContext = useContext(CartContext);

  const addItemToCart = (event) => {
    const items = {
      id:event.id,
      title: event.title,
      price: event.price,
      imageUrl: event.imageUrl,
      quantity: event.quantity,
    }
    StoreContext.addItem(items);
    console.log("instore", items);
  }

  return (
    <div>
      <SubHeader />
      <Container className="bg-white p-3" style={{ marginTop: '20px', marginBottom: '20px' }}>
        <h1 className="mt-3 mb-3 text-center" style={{ fontFamily: 'Algerian', fontSize: '40px' }}>Products</h1>
        <Row>
          {productsArr.map((product, index) => (
            <Col key={index} xs={12} md={6} lg={3} className="mb-2">
              <Card>
                <Card.Title style={{ fontFamily: 'Algerian', fontSize: '20px' }}>{product.title}</Card.Title>
                <Card.Img variant="top" className={classes.productcard} src={product.imageUrl} />
                <Card.Body>
                  <Card.Text>Rs {product.price}</Card.Text>
                  <Button variant="primary" onClick={() => addItemToCart(product)}>Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Store;
