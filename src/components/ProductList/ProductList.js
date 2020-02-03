import React from 'react';
import { connect } from 'react-redux'
import './ProductList.css';
import ListItem from './ListItem/ListItem'
import { reqProducts, addToCart } from '../../actions';

class ProductList extends React.Component {

    componentDidMount() {
        this.props.reqProducts();
    }

    getProductsList(list) {

        return list.map((item, index) => (
            <ListItem key={index} item={item} onAddCartClick={this.props.addToCart} />
        ))
    }

    render() {
        const list = this.props.products;
        return <main className="product-list">
            {list ? this.getProductsList(list) : <div>Loading. Wait, please!</div>}
        </main>
    }
}

const mapDispatchToProps = {
    reqProducts: reqProducts,
    addToCart: addToCart,
};

const mapStateToProps = (state) => ({
    products: state.products,
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
