// import { useContext, useState, useEffect } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Table from "react-bootstrap/Table";
// import Image from "react-bootstrap/Image";
// import CartContext from "./Context/Cart-Context";
// import "./Cart.css";
// import { useNavigate } from 'react-router-dom';


// function Cart() {
//   const { items, removeItem } = useContext(CartContext);
//   const [show, setShow] = useState(false);
//   const [totalAmount, setTotalAmount] = useState(0); 
//   const navigate = useNavigate();

//   useEffect(() => {
    
//     const calculateTotalAmount = () => {
//       let total = 0;
//       items.forEach((item) => {
//         total += item.price * item.quantity;
//       });
//       return total;
//     };
//     setTotalAmount(calculateTotalAmount()); 
//   }, [items]);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const removeItemHandler = (id) => {
//     removeItem(id);
//   };

//   const buyHandler = () => {
//     const itemNames = items.map((item) => item.title).join(", ");
//     const totalQuantity = items.reduce((total, item) => total + Number(item.quantity), 0);
//     const alertMessage = `Items purchased successfully!\nItems: ${itemNames}\nTotal Quantity: ${totalQuantity}\nTotal Amount: Rs-${totalAmount}`;
//     alert(alertMessage);

//     items.forEach((item) => {
//       removeItemHandler(item.title);
//     });
//     handleClose();
//   };

//   let qty = 0;
//   items.forEach((item) => {
//     qty += Number(item.quantity);
//   });

//   return (
//     <>
//       <Button variant="dark" onClick={handleShow} style={{ fontFamily: 'Algerian', fontWeight: 'bold', fontSize: '20px', color: 'yellow' }}>
//         Cart <sup style={{ fontFamily: 'Algerian', fontWeight: 'bold', fontSize: '14px', color: 'white' }}>{qty}</sup>
//       </Button>

      
//       <Modal show={show} onHide={handleClose}  size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title>Items</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Table responsive striped bordered hover size="lg">
//             <thead>
//               <tr>
//                 <th>Image</th>
//                 <th>Item</th>
//                 <th>Price</th>
//                 <th>Quantity</th>
//                 <th>Remove</th>
//               </tr>
//             </thead>
//             <tbody>
//               {items.map((item, index) => (
//                 <tr key={index}>
//                   <td>
//                     <Image
//                       src={item.imageUrl}
//                       style={{ width: "70px", height: "70px" }}
//                     />
//                   </td>
//                   <td>{item.title}</td>
//                   <td>Rs-{item.price}</td>
//                   <td>{item.quantity}</td>
//                   <td>
//                     <Button
//                       variant="danger"
//                       onClick={() => removeItemHandler(item.title)}
//                     >
//                       Remove
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </Modal.Body>
//         <Modal.Footer>
//           <p>Total Amount: Rs-{totalAmount}</p>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={buyHandler}>Buy</Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Cart;

import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import CartContext from "./Context/Cart-Context";
import axios from "axios";

function Cart() {
  const { items, removeItem } = useContext(CartContext);
  const [show, setShow] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const [refresh, setRefresh] = useState(false); 

  useEffect(() => {
    fetchCartItems(); 
  }, [refresh]);

  const fetchCartItems = async () => {
    try {
       // Retrieve email from localStorage
       const email = localStorage.getItem('email');

       // Modify email to exclude '@' and '.'
     const modifiedEmail = email.replace(/[@.]/g, "");
      const response = await axios.get(`https://crudcrud.com/api/22a57371f63a44c5acad87977f186f72/${modifiedEmail}/`);;
      setCartItems(response.data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeItemHandler = async(id) => {
    console.log('inremove',id)
    // removeItem(id);
    try {

      // Retrieve email from localStorage
    const email = localStorage.getItem('email');

      // Modify email to exclude '@' and '.'
    const modifiedEmail = email.replace(/[@.]/g, "");
    
    const response = await axios.get(`https://crudcrud.com/api/22a57371f63a44c5acad87977f186f72/${modifiedEmail}`);
    const cartItems = response.data;

// Iterate over each item in the response data
for (const item of cartItems) {
  if(item.id===id){
  const itemId = item._id;

  // Perform delete operation for each item
  await axios.delete(`https://crudcrud.com/api/22a57371f63a44c5acad87977f186f72/${modifiedEmail}/${itemId}`);
  }
}
    alert("Items removed successfully!");
    await fetchCartItems();
    
  } catch (error) {
    console.error("Error removing items:", error);
  }

      handleClose();
  };

  const buyHandler = async () => {
    try {

        // Retrieve email from localStorage
      const email = localStorage.getItem('email');

        // Modify email to exclude '@' and '.'
      const modifiedEmail = email.replace(/[@.]/g, "");
      
      const response = await axios.get(`https://crudcrud.com/api/22a57371f63a44c5acad87977f186f72/${modifiedEmail}`);
      const cartItems = response.data;

// Iterate over each item in the response data
for (const item of cartItems) {
    const itemId = item._id;

    // Perform delete operation for each item
    await axios.delete(`https://crudcrud.com/api/22a57371f63a44c5acad87977f186f72/${modifiedEmail}/${itemId}`);
}

// Optionally, you can fetch the updated cart items after deletion
    const updatedResponse = await axios.get(`https://crudcrud.com/api/22a57371f63a44c5acad87977f186f72/${modifiedEmail}`);
    const updatedCartItems = updatedResponse.data;


      alert("Items purchased successfully!");
      setCartItems(updatedCartItems);
      handleClose();
    } catch (error) {
      console.error("Error purchasing items:", error);
    }
  };

  return (
    <>
      <Button variant="dark" onClick={handleShow} style={{ fontFamily: 'Algerian', fontWeight: 'bold', fontSize: '20px', color: 'yellow' }}>
        Cart <sup style={{ fontFamily: 'Algerian', fontWeight: 'bold', fontSize: '14px', color: 'white' }}>{cartItems.length}</sup>
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
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
                <th>Quantity</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    <Image
                      src={item.imageUrl}
                      style={{ width: "70px", height: "70px" }}
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>Rs-{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => removeItemHandler(item.id)}
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
          <Button variant="primary" onClick={buyHandler}>Buy</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart;
