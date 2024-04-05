import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import back from '../images/Vector 2 (2).svg'
import Footer from '../Footer/Footer';
import { useCart } from './CartContext';
const PageContainer = styled.div`
  background: url(${back});
  padding: 20px;
  background-color: #f8f9fa; // لون الخلفية الفاتح
  min-height: 100vh; // الارتفاع ليأخذ الصفحة كاملة
`;

const CartHeader = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: #333; // لون العنوان الغامق
`;

const CartContainer = styled.div`
  background-color: #ffffff; // خلفية بيضاء للمحتوى
  padding: 1rem;
  border-radius: 8px; // حواف مدورة
  box-shadow: 0 6px 10px rgba(0,0,0,0.1); // ظل خفيف
  margin-bottom: 2rem; // مسافة بين البطاقات
`;

const CartItemContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 3fr 1fr 1fr auto; // توزيع الأعمدة
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0; // لا هوامش بعد العنصر الأخير
  }
`;

const CartItemImage = styled.img`
  width: 100%;
  border-radius: 8px; // حواف الصورة مدورة
`;

const ItemDetails = styled.div`
  text-align: left;
`;

const ItemName = styled.p`
  font-weight: bold;
  margin: 0;
`;

const ItemCode = styled.p`
  margin: 0;
  color: #666; // لون رمادي للكود
`;

const ItemPrice = styled.p`
  margin: 0;
  font-weight: bold;
  color: #666; // لون رمادي للسعر
`;

const ItemColor = styled.p`
  margin: 0;
  color: #666; // لون رمادي للون
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #dc3545; // لون أحمر لزر الحذف
  cursor: pointer;
`;

// Mock dat

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  return (
    <>
      <Header />
      <PageContainer>
        <CartHeader>my Cart</CartHeader>
        <CartContainer>
        {cartItems.map(item => (
  <CartItemContainer key={item.id}>
    <CartItemImage src={item.mainImage} alt={item.name} />
    <ItemDetails>
      <ItemName>{item.name}</ItemName>
      <ItemCode>Engine Capacity: {item.engineCapacity}</ItemCode>
      <ItemColor>Color: {item.color}</ItemColor>
      <ItemPrice>${item.price}</ItemPrice>
      <p>Quantity: {item.quantity}</p>
    </ItemDetails>
    <DeleteButton onClick={() => handleRemove(item.id)}>Remove</DeleteButton>
  </CartItemContainer>
))}
        </CartContainer>
      </PageContainer>
      <Footer/>
    </>
  );
};


export default Cart;