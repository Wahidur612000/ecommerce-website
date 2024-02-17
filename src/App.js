import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import ProductsScreen from './component/ProductsScreen'; 
import Cart from './component/Cart';

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      <Header onCartClick={handleCartClick} />
      <ProductsScreen />
      {showCart && <Cart />}
    </div>
  );
}

export default App;
