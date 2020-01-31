import React from 'react';
// import icon_remove from '../../../../icons/icon-remove-basket.png'
import icon_add from '../../../../icons/icon-add-basket.png'

const ListItem = ({item, onAddCartClick, isInCart}) => {
  // const cartImage = isInCart ? icon_remove : icon_add;

  return (
    <div className="product-list-item">
      <div className="product-title">{item.title}</div>
      <div className="product-description">{item.description}</div>
      <div className="product-price">{(item.price).toFixed(2)}</div>
      <div className="cart-image" onClick={(e) => onAddCartClick(item, e)}><span className='vertically-center' /><img alt='Cart' src={icon_add} /></div>
      <div className="product-image"><span className='vertically-center' /><img alt='Product' src={item.image} /></div>
    </div>
  );
}

export default ListItem;
