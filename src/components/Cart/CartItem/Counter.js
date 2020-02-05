import React from 'react';

const Counter = ({id, count, onDecrement, onIncrement }) => {

  return (
    <div className="cart-item-counter">
      <div className="counter-dec" onClick={() => onDecrement(id)}>-</div>
      <div className="counter-count">{count}</div>
      <div className="counter-inc" onClick={() => onIncrement(id)}>+</div>
    </div>
  );
}

export default Counter;