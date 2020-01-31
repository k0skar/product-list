import React from 'react';
import './App.css';
import ProductList from '../ProductList/ProductList';
import Cart from '../Cart/Cart';

class App extends React.Component {

  state = {
    showCart: false,
    cartItemsStore: []
  };


  showCart = () => {
    this.setState({ showCart: true });
  };

  hideCart = () => {
    this.setState({ showCart: false });
  };

  handleRemoveCartItem = (id) => {
    const newCartState = [...this.state.cartItemsStore]

    for (const [index, value] of newCartState.entries()) {

      if (value.id === id) {
        newCartState.splice(index, 1)
        break
      }
    }
    this.setState({
      cartItemsStore: newCartState
    })
  }

  handleAddCartItem = (item) => {

    this.setState({
      cartItemsStore: [...this.state.cartItemsStore, item]
    })
  }

  renderCart = () => {
    return (
      this.state.showCart
        ?
        <Cart
          show={this.state.showCart}
          handleClose={this.hideCart}
          onRemoveClick={this.handleRemoveCartItem}
          cartItems={this.state.cartItemsStore} />
        :
        ''
    )
  }

  render() {
    return <div className="App">
      <header className="main-header">
        <h5 >
          Product list
        </h5>
        <button type="button" onClick={this.showCart}>
          OPEN CART
        </button>
      </header>

      <ProductList onAddCartClick={this.handleAddCartItem}></ProductList>
      {this.renderCart()}
    </div>
  }
}

export default App;
