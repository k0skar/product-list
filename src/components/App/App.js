import React from 'react';
import './App.css';
import ProductList from '../ProductList/ProductList';
import Cart from '../Cart/Cart';

class App extends React.Component {

  state = {
    showCart: false,
  };


  showCart = () => {
    this.setState({ showCart: true });
  };

  hideCart = () => {
    this.setState({ showCart: false });
  };

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
      {this.state.showCart ? <Cart handleClose={this.hideCart}/> : ''}
    </div>
  }
}

export default App;
