import React, { Fragment } from 'react';
import icon_add from '../../../icons/shopping-cart-add.png'

const ListItem = ({item, onAddCartClick, isInCart}) => {

  return (
    <Fragment>
    <div className="product-list-item">
      <div className="product-title">{item.title}</div>
      <div className="product-description">{item.description}</div>
      <div className="product-price">{(item.price).toFixed(2)}</div>
      <div className="cart-image" onClick={(e) => onAddCartClick(item.id)}><span className='vertically-center' /><img alt='Cart' src={icon_add} /></div>
      <div className="product-image"><span className='vertically-center' /><img alt='Product' src={item.image} /></div>
    </div>
    <hr className= 'list-line-divider'/>
    </Fragment>
  );
}

export default ListItem;
