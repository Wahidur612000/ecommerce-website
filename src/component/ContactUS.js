import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import Footer from './Footer';
import styles from './ContactUS.module.css'; // Import the CSS module

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onsubmitHandler = async (e) => {
    e.preventDefault();
    let data = {
      name: formData.name,
      email: formData.email,
      phoneno: formData.phone,
    };
    const response = await fetch(
      "https://crudcrud.com/api/ac5b6af540384e23b12ff8f23e2e17c7/contact",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const datas = await response.json();
    console.log(datas);

    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      phone: ''
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="bg-dark text-center">
        <h1 className="mt-5 mb-3" style={{ fontFamily: 'Algerian', fontWeight: 'bold', fontSize: '60px', color: 'yellow' }}>
          Sale Spot
        </h1>
      </div>
      <div className="text-center"  >
        <h1 className="mt-5 mb-3" style={{ fontFamily: 'Algerian', fontWeight: 'bold', fontSize: '40px', color: 'black' }}>
          Inquiry Form
        </h1>
      </div>
      <div className="d-flex justify-content-center align-items-center h-100">
        <Card style={{ width: '400px' }}>
          <Card.Body style={{backgroundColor: 'black'}}>
            <h1 className="text-center" style={{ fontFamily: 'Algerian', fontSize: '40px', color: 'yellow' }} >Contact Us</h1>
            <Form onSubmit={onsubmitHandler} className={styles.auth}> 
              <Form.Group controlId="formName">
                <Form.Label style={{fontFamily: 'Algerian',color: 'yellow',fontSize: '20px'}}>Name:</Form.Label>
                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter name" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label style={{fontFamily: 'Algerian',color: 'yellow',fontSize: '20px'}}>Email:</Form.Label>
                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formPhone">
                <Form.Label style={{fontFamily: 'Algerian',color: 'yellow',fontSize: '20px'}}>Phone Number:</Form.Label>
                <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter phone number" />
              </Form.Group>

              <Button style={{color: 'yellow'}} type="submit" block>Submit</Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
      <Footer className="bg-dark text-white text-center py-3" />
    </div>
  );
};

export default ContactUs;
