import React from 'react';
import './Cart.css';
import CartItem from './CartItem/CartItem'

const Cart = ({cartItems, show, handleClose, onRemoveClick}) => {

    function getProductsList(list) {
       
        return list.map((item, index) => (
            <CartItem key={index} item={item} onRemoveClick={onRemoveClick} />
        ))
    }

    const cartContent = cartItems && cartItems.length ? getProductsList(cartItems) : <div>Your cart is empty!</div>
    
    return (
        <div className='modal display-block'>
            <div className='cart-container'>
                <section className='cart-list'>
                    {cartContent}
                    <button onClick={handleClose}>close</button>
                </section>
            </div>
        </div>
    );
};

export default Cart