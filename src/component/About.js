import React from 'react';
import {  Image } from 'react-bootstrap';
import Footer from './Footer';

function About() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="bg-dark text-center">
        <h1 className="mt-5 mb-3" style={{ fontFamily: 'Algerian', fontWeight: 'bold', fontSize: '60px', color: 'yellow' }}>Sale Spot</h1>
      </div>
      <h1
        style={{
          padding: "10px",
          textAlign: "center",
          justifyContent: "center",
          fontSize: "30px",
          fontFamily: "cursive",
        }}
      >
        About
      </h1>

      <center>
        <Image
          src="https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png"
          style={{
            width: "200px",
            height: "auto",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            width: "80%",
            padding: "40px",
            textAlign: "center",
            justifyContent: "center",
            fontSize: "20px",
          }}
        >
          Sale Spot, where every item is a treasure waiting to be discovered! Step into a world of unbeatable deals and irresistible offers on a wide range of merchandise. From trendy apparel and stylish accessories to home decor and gadgets, our sale spot is a haven for savvy shoppers looking to snag incredible bargains. Whether you're hunting for the perfect gift or simply treating yourself to something special, you'll find it here at prices that won't break the bank. With new items added regularly and discounts that are too good to resist, our sale spot is the ultimate destination for anyone seeking quality merchandise at unbeatable prices. Shop now and uncover the hidden gems that await you!
        </div>
      </center>
      <Footer />
    </div>
  );
}

export default About;
