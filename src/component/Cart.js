import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import CartContext from "./Context/Cart-Context";
import "./Cart.css";


function Cart() {
  const { items, removeItem } = useContext(CartContext);
  console.log("incart", items);
 

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeItemHandler = (id) => {
    removeItem(id);
  };

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        Cart Items
      </Button>
      
      <Modal show={show} onHide={handleClose}  size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Items</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table responsive striped bordered hover size="lg">
            <thead>
              <tr>
                <th>Image</th>
                <th>Item</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>
                    <Image
                      src={item.imageUrl}
                      style={{ width: "70px", height: "70px" }}
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>Rs-{item.price}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => removeItemHandler(item.title)}
                    >
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
          <Button variant="primary">Buy</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart;