import React, { useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import './Cart.css'; // Import custom CSS file for styling

const initialCartElements = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 2,
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 2,
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    quantity: 2,
  },
];

export const Cart = () => { // Export Cart component
  const [showCart, setShowCart] = useState(false);
  const [cartElements, setCartElements] = useState(initialCartElements);

  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);

  const removeItem = (index) => {
    const updatedCart = [...cartElements];
    updatedCart.splice(index, 1);
    setCartElements(updatedCart);
  };

  const totalItemsInCart = cartElements.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Button variant="contained" style={{ color: 'yellow',fontFamily: 'Algerian', fontSize: '20px' }} className='abc' type='submit' onClick={handleShow}>
        Cart <sup>{totalItemsInCart}</sup>
      </Button>

      <Modal show={showCart} onHide={handleClose} dialogClassName="modal-right">
        <Modal.Header closeButton>
          <Modal.Title style={{ fontFamily: 'Algerian', fontWeight: 'bold', fontSize: '24px' }}>CART</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartElements.map((item, index) => (
                <tr key={index}>
                  <td><img src={item.imageUrl} alt={item.title} style={{ width: '50px', height: '50px' }} /></td>
                  <td>{item.title}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <Button variant="danger" onClick={() => removeItem(index)}>
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">
            Purchase
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
