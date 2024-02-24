import React, { useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import './Cart.css'; // Import custom CSS file for styling

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
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);

  const handleAddToCart = (product) => {
    setCart([...cart, { ...product }]);
  };

  const handleRemove = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Button variant="contained" style={{ color: 'white' }} className='abc' type='submit' onClick={handleShow}>
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
              {cart.map((item, index) => (
                <tr key={index}>
                  <td><img src={item.imageUrl} alt={item.title} style={{ width: '50px', height: '50px' }} /></td>
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
      
      <div>
        <h1 className="mt-5 mb-3">Products</h1>
        {productsArr.map((product, index) => (
          <div key={index}>
            <img src={product.imageUrl} alt={product.title} style={{ width: '50px', height: '50px' }} />
            <span>{product.title}</span>
            <span>${product.price}</span>
            <Button variant="primary" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Store;
