import React from 'react';
import './ProductList.css';
import ListItem from './ListItem/ListItem'
// import { fetchAllProducts } from '../../connector'

class ProductList extends React.Component {

    state = {
        dataList: null,
    }

    componentDidMount() {
        //fetch('http://localhost:3000/products')
        fetch('https://json-server-k.herokuapp.com/products')
            .then(response => response.json())
            .then(dataList => this.setState({ dataList }));
    }

    getProductsList(list) {

        return list.map((item, index) => (
            <ListItem key={index} item={item} onAddCartClick={this.props.onAddCartClick} />
        ))
    }

    render() {
        const list = this.state.dataList;

        return <main className="product-list">
            {list ? this.getProductsList(list) : <div>Loading. Wait, please!</div>}
        </main>
    }
}

export default ProductList;