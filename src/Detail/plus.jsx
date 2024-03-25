import React from 'react';

const QuantitySelector = ({ quantity, setQuantity }) => {
  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <button onClick={decreaseQuantity} style={{ background: 'transparent', border: '1px solid', borderRadius: '50%', cursor: 'pointer' }}>
        -
      </button>
      <span>{quantity}</span>
      <button onClick={increaseQuantity} style={{ background: 'transparent', border: '1px solid', borderRadius: '50%', cursor: 'pointer' }}>
        +
      </button>
    </div>
  );
};

export default QuantitySelector;



