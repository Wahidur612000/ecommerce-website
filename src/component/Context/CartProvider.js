import React, { useState } from 'react';
import CartContext from './Cart-Context';

const CartProvider=(props=>{

    const[items,setItems]=useState([]);

    const addItemHandler=(item)=>{
        setItems([...items,item]);
        console.log("inprovider", items);
    }

    const removeItemHandler=(id)=>{
        setItems(items.filter((item)=>item.title!==id))
    }

    const cartContext={
        items:items,
        addItem:addItemHandler,
        removeItem:removeItemHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
})

export default CartProvider;