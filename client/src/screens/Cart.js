import React from "react";

const Cart = ({ cartItems, onRemoveItem }) => {
  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {/* {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - Selector Number: {item.selectorNumber}
              <button onClick={() => onRemoveItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
};

export default Cart;
