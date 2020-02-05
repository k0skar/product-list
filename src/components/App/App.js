import React from 'react';
import './App.css';
import ProductList from '../ProductList/ProductList';
import Cart from '../Cart/Cart';
import icon_cart from '../../icons/shopping-cart.png';

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
        <h2>
          Product list
        </h2>
        <input
          type="image"
          src={icon_cart}
          alt='Open Cart'
          onClick={this.showCart} 
          className = 'button-cart'/>
      </header>

      <ProductList onAddCartClick={this.handleAddCartItem}></ProductList>
      {this.state.showCart ? <Cart handleClose={this.hideCart} /> : ''}
    </div>
  }
}

export default App;
