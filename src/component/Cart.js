import React, { useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';

const cartElements = [
  {
    title: 'Album 2',
    price: 14.99,
    quantity: 1,
  },
  {
    title: 'Album 4',
    price: 19.99,
    quantity: 1,
  },
  {
    title: 'Coffee Cup',
    price: 6.99,
    quantity: 1,
  },
];

const Cart = () => {
  const [showCart, setShowCart] = useState(false);

  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);

  const handleRemove = (index) => {
    // Remove the item from the cartElements array
    const updatedCart = [...cartElements];
    updatedCart.splice(index, 1);
    // Update the state
    // This part would be different when you implement the actual functionality to manage cart state
    console.log("Item removed from cart:", cartElements[index]);
  };

  const totalItemsInCart = cartElements.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Cart <sup>{totalItemsInCart}</sup>
      </Button>

      <Modal show={showCart} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>CART</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartElements.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <Button variant="danger" onClick={() => handleRemove(index)}>
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
