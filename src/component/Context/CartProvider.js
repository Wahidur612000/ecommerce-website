import React, { useState, useEffect } from 'react';
import CartContext from './Cart-Context';

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [logoutTimer, setLogoutTimer] = useState(null);

  const addItemHandler = (item) => {
    setItems((prevItems) => [...prevItems, item]);
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
    clearTimeout(logoutTimer);
  };

  const startLogoutTimer = () => {
    // Clear existing timer if exists
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
    // Set a new timer for 5 minutes
    const timer = setTimeout(() => {
      logoutHandler();
      // Redirect to login page or show notification for logout
    }, 5 * 60 * 1000); // 5 minutes
    setLogoutTimer(timer);
  };

  useEffect(() => {
    // Set logout timer when user logs in
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
