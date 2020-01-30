import React from 'react';
import icon_remove from '../../../../icons/icon-remove-basket.png'

const CartItem = ({ item, onRemoveClick }) => {

  return (
    <div className="product-list-item">
      <div className="product-title">{item.title}</div>
      <div className="product-price">{(item.price).toFixed(2)}</div>
      <div className="remove-image" onClick={(e) => onRemoveClick(item.id, e)}><span className='vertically-center' /><img alt='Cart' src={icon_remove} /></div>
    </div>
  );
}

export default CartItem;
