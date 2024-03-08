import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';

// Styled components
const PageContainer = styled.div`
  padding: 20px;
`;

const CartHeader = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

const CartItemContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto auto auto;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
`;

const CartItemImage = styled.img`
  width: 100px; // Set the image size you want
`;

const CartItemDetails = styled.div`
  text-align: left;
`;

const Price = styled.span`
  font-weight: bold;
  margin-right: 1rem;
`;

const Color = styled.span`
  // additional styles if needed
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: red;
  cursor: pointer;
`;

// Mock data
const cartItems = [
  {
    id: 1,
    make: 'Audi',
    model: 'Q7',
    image: 'path-to-audi-image.jpg',
    price: '£240.55',
    color: 'Black'
  },
  // ... other cart items
];

const Cart = () => {
  // Handler to remove item from cart
  const removeFromCart = (itemId) => {
    console.log('Remove item with id:', itemId);
    // Logic to remove item from cart
  };

  return (
    <>
    <Header/>
    <PageContainer>
      <CartHeader>My Cart</CartHeader>
      {cartItems.map(item => (
        <CartItemContainer key={item.id}>
          <CartItemImage src={item.image} alt={item.make} />
          <CartItemDetails>
            <div>{item.make}</div>
            <div>Code: #715637</div>
            <div>Engine Capacity: 6000cc</div>
          </CartItemDetails>
          <Price>{item.price}</Price>
          <Color>{item.color}</Color>
          <DeleteButton onClick={() => removeFromCart(item.id)}>X</DeleteButton>
        </CartItemContainer>
      ))}
    </PageContainer>
    </>
  );
};

export default Cart;
