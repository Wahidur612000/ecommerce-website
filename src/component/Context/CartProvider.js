import React, { useState } from 'react';
import CartContext from './Cart-Context';

const CartProvider=(props=>{

    const[items,setItems]=useState([]);

    const addItemHandler=(item)=>{

        setItems([...items,item]);
        
    }

    const removeItemHandler=(id)=>{
        setItems(items.filter((item)=>item.title!==id))
    }

    const[token,setToken]=useState(null);

    const userIsLoggedIn=!!token;

    const loginHandler=(token)=>{
        setToken(token);
        console.log("inloginhandler",token);
    }
    const logoutHandler=()=>{
        setToken(null);
    }



    const cartContext={
        items:items,
        addItem:addItemHandler,
        removeItem:removeItemHandler,
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
})

export default CartProvider;