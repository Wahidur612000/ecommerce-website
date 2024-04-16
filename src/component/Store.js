// Store.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useContext } from 'react';
import CartContext from './Context/Cart-Context';
import SubHeader from './SubHeader';
import Footer from './Footer';




const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 1,
    
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 1,
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    quantity: 1,
  },
];

const Store = () => {

  const StoreContext=useContext(CartContext);

  const addItemToCart=(event)=>{
        const items= {
          title:event.title,
          price:event.price,
          imageUrl:event.imageUrl,
          quantity:event.quantity,
        }
        StoreContext.addItem(items);
        console.log("instore", items);
  }
  


  return (
    <div>
      <SubHeader />
      <div className="d-flex flex-column">
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
                  <Button variant="primary" onClick={() =>addItemToCart(product) }>Add to Cart</Button>
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
