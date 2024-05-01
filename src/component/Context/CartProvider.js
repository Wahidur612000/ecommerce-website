import React, { useState, useEffect } from 'react';
import CartContext from './Cart-Context';
import axios from "axios";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [logoutTimer, setLogoutTimer] = useState(null);


  //for local
//   const addItemHandler = (item) => {
//     setItems((prevItems) => [...prevItems, item]);
//   };

const fetchCartItems = async () => {
  try {
    const email = localStorage.getItem('email');
    const modifiedEmail = email.replace(/[@.]/g, "");
    const response = await axios.get(`https://crudcrud.com/api/5a1a239e0f03497f84bcb0806917e7b1/${modifiedEmail}`);
    setItems(response.data);
  } catch (error) {
    console.error("Error fetching cart items:", error);
  }
};

const addItemHandler = async(item) => {
    const itemIndex = items.findIndex(
      (cartItem) => cartItem.title === item.title
    );

    if (itemIndex !== -1) {
      alert("Item already added to cart");
      return;
    }

    else{ 
          //for local
          //setItems([...items, { ...item, quantity: 1 }]); //for local
    try {
        // Retrieve email from localStorage
      const email = localStorage.getItem('email');

      // Modify email to exclude '@' and '.'
      const modifiedEmail = email.replace(/[@.]/g, "");

      // Make API call using modified email
      const response = await axios.post(`https://crudcrud.com/api/22a57371f63a44c5acad87977f186f72/${modifiedEmail}/`, item);
      const newItem = { ...item, quantity: 1 };
      setItems([...items, newItem]);
      setItems((prevItems) => [...prevItems, newItem]);
      await fetchCartItems();
      console.log("Item added to cart:", newItem);
      } catch (error) {
        console.error("Error adding item to cart:", error);
        alert("Failed to add item to cart");
      }
     }
  };


  const removeItemHandler = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.title !== id));
  };

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
    startLogoutTimer();
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    clearTimeout(logoutTimer);
  };

  const startLogoutTimer = () => {
    
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
    
    const timer = setTimeout(() => {
      logoutHandler();     
    }, 5 * 60 * 1000); 
    setLogoutTimer(timer);
  };

  useEffect(() => {
    if (token) {
      startLogoutTimer();
    }
  }, [token]);

  const userIsLoggedIn = !!token;

  const cartContext = {
    items: items,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
