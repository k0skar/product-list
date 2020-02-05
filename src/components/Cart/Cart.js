import React from 'react';
import './Cart.css';
import CartItem from './CartItem/CartItem'
import { connect } from 'react-redux'
import { removeItemFromCart, removeOneFromCart, addOneToCart } from '../../actions';

const Cart = ({ cartItems, products, handleClose, removeItem, removeOne, addOne }) => {

    const getProductsList = (cart, products) => {
        const itemArray = [];

        function findItem(id) {
            return products.find((i) => i.id === parseInt(id))
        }

        for (const id in cart) {
            itemArray.push(<CartItem
                key={id}
                item={findItem(id)}
                count={cart[id]}
                onRemoveClick={removeItem}
                onDecrement={removeOne}
                onIncrement={addOne} />)
        }

        return itemArray
    }

    const cartContent = (Object.entries(cartItems).length)
        ? getProductsList(cartItems, products)
        : <div className = 'empty-cart-message'>Your cart is empty!</div>

    return (
        <div className='modal display-block'>
            <div className='cart-container'>
                <header>
                    <h4>Shopping cart</h4>
                </header>
                <section className='cart-list'>
                    {cartContent}
                </section>
                <footer>
                    <button onClick={handleClose}>close</button>
                </footer>
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