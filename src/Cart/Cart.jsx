import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import img1 from '../images/dhiva-krishna-X16zXcbxU4U-unsplash.jpg';
import img2 from '../images/ryan-spencer-c-NEiPIxpYI-unsplash.jpg';
import img3 from '../images/erik-mclean-AaYAElNOxsQ-unsplash.jpg';
import img4 from '../images/ixography-05Q_XPF_YKs-unsplash.jpg';
import back from '../images/Vector 2 (2).svg'
import Footer from '../Footer/Footer';
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

// Mock data
const cartItems = [
  {
    id: 1,
    name: 'Audi',
    code: '#715637',
    price: '€240.55',
    color: 'Black',
    image:img1, // يجب استبدال هذا بمسار الصورة الصحيح
    engineCapacity: '6000cc'
  },
  {
    id: 2,
    name: 'Audi',
    code: '#715637',
    price: '€240.55',
    color: 'Black',
    image:img2, // يجب استبدال هذا بمسار الصورة الصحيح
    engineCapacity: '6000cc'
  },
  {
    id: 3,
    name: 'Audi',
    code: '#715637',
    price: '€240.55',
    color: 'Black',
    image:img3, // يجب استبدال هذا بمسار الصورة الصحيح
    engineCapacity: '6000cc'
  },
  {
    id: 4,
    name: 'Audi',
    code: '#715637',
    price: '€240.55',
    color: 'Black',
    image:img4, // يجب استبدال هذا بمسار الصورة الصحيح
    engineCapacity: '6000cc'
  },
  // ... other items
];

const Cart = () => {
  // Function to handle removing items from the cart
  const handleRemove = (id) => {
    // Placeholder for remove logic
    alert(`Remove item with id ${id}`);
  };

  return (
    <>
      <Header />
      <PageContainer>
        <CartHeader>my Cart</CartHeader>
        <CartContainer>
          {cartItems.map(item => (
            <CartItemContainer key={item.id}>
              <CartItemImage src={item.image} alt={item.name} />
              <ItemDetails>
                <ItemName>{item.name}</ItemName>
                <ItemCode>Code: {item.code}</ItemCode>
                <p>Engine Capacity: {item.engineCapacity}</p>
              </ItemDetails>
              <ItemPrice>{item.price}</ItemPrice>
              <ItemColor>Color: {item.color}</ItemColor>
              <DeleteButton onClick={() => handleRemove(item.id)}>X</DeleteButton>
            </CartItemContainer>
          ))}
        </CartContainer>
      </PageContainer>
      <Footer/>
    </>
  );
};

export default Cart;
