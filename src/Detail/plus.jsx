import React, { useState } from 'react';

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <button onClick={decreaseQuantity} style={{ background: 'transparent', border: '1px solid', borderRadius:'50%', cursor: 'pointer' }}>
        - {/* Replace with actual path to your minus icon */}
      </button>
      <span>{quantity}</span>
      <button onClick={increaseQuantity} style={{ background: 'transparent', border: '1px solid', borderRadius:'50%', cursor: 'pointer' }}>
        + {/* Replace with actual path to your plus icon */}
      </button>
    </div>
  );
};
export default QuantitySelector;