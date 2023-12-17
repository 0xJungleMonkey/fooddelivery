import React from "react";

const QuantitySelector = ({ quantity, onIncrement, onDecrement }) => {
  return (
    <div className="quantity-selector">
      <button onClick={onDecrement} className="action-button">
        -
      </button>
      <span className="quantity">{quantity}</span>
      <button onClick={onIncrement} className="action-button">
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
