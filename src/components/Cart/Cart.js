import React from 'react';
import './Cart.css';
import CartItem from './CartItem/CartItem'
import { connect } from 'react-redux'
import { removeItemFromCart, removeOneFromCart, addOneToCart } from '../../actions';

const Cart = ({ cartItems, products, handleClose, removeItem, removeOne, addOne }) => {

    const getProductsList = (cart, products) => {
        const itemArray = [];
    
        for (const id in cart) {
            itemArray.push(<CartItem
                key={id}
                item={products[id]}
                count={cart[id]}
                onRemoveClick={removeItem}
                onDecrement={removeOne}
                onIncrement={addOne} />)
        }
    
        return itemArray
    }

    const cartContent = (Object.entries(cartItems).length) ? getProductsList(cartItems, products) : <div>Your cart is empty!</div>

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

const mapDispatchToProps = {
    removeItem: removeItemFromCart,
    removeOne: removeOneFromCart,
    addOne: addOneToCart
};

const mapStateToProps = (state) => ({
    cartItems: state.cart,
    products: state.products,
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)