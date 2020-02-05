import React from 'react';
import icon_remove from '../../../icons/shopping-cart-remove.png';
import Counter from './Counter';

const CartItem = ({ item, onRemoveClick, count, onDecrement, onIncrement }) => {
  
  return (
    <div className="product-list-item">
      <div className="product-title">{item.title}</div>
      <div className="product-price">{(item.price).toFixed(2)}</div>
      <Counter
        id={item.id}
        count={count}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
      />
      <div className="remove-image" onClick={(e) => onRemoveClick(item.id)}><span className='vertically-center' /><img alt='Cart' src={icon_remove} /></div>
    </div>
  );
}

export default CartItem;
