import React from 'react';
import CartItem from './CartItem/CartItem'

class Cart extends React.Component {

    state = {
        show: false,
        items: props.items,
    }

    getProductsList(list) {

        return list.map((item, index) => (
            <CartItem key={index} item={item} onRemoveClick={this.onRemoveClick} />
        ))
    }

    onRemoveClick(id) {

    }

    render() {
        const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
        const list = this.state.items;

        return (
            <div className={showHideClassName}>
                <section className="modal-main">
                    {list ? this.getProductsList(list) : <div>Your cart is empty!</div>}
                    <button onClick={this.props.handleClose}>close</button>
                </section>
            </div>
        );
    }
};

export default Cart