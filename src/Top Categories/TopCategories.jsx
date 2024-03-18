import React from 'react';
import styled from 'styled-components';
import img1 from '../images/dhiva-krishna-X16zXcbxU4U-unsplash.jpg';
import img2 from '../images/ryan-spencer-c-NEiPIxpYI-unsplash.jpg';
import img3 from '../images/erik-mclean-AaYAElNOxsQ-unsplash.jpg';
import img4 from '../images/ixography-05Q_XPF_YKs-unsplash.jpg';
import { useCart } from '../Cart/CartContext';
import  {useNavigate} from 'react-router-dom';



const TopCategoriesContainer = styled.div`
  max-width: 1200px;
  margin: 40px;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); // 2 columns for smaller desktops and tablets
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // 1 column for mobile devices
    margin: 40px 20px; // Reduce margin for smaller screens
  }
`;

const CategoryTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  width: 100%;
`;


const Card = styled.div`
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
  @media (max-width: 768px) {
    &:hover {
      transform: none; // Disable hover effect for mobile devices
    }
  }
`;

const CarImage = styled.img`
  width: 100%;
  height: 200px; // تعديل حسب الحاجة لتصغير الصورة
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const CarInfo = styled.div`
  padding: 1rem;
`;

const CarName = styled.h3`
  color: #333;
  margin-bottom: 1rem;
`;

const CarDetails = styled.p`
  color: #555;
  margin: 0.5rem 0;
`;

const Price = styled.p`
  color: #000;
  margin: 0.5rem 0;
`;

const Button = styled.button`
  background-color: #fff;
  color: black;
  border: 1px solid #a17e7e;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 0.5rem;
  transition: background-color 0.3s;
  margin:10px;

  &:hover {
    background-color: #a17e7e;
    color:white;
  }
`;
const handleDetailsClick = () => {
  window.location.href = '/details'; // استبدل بالرابط المطلوب
};
const cars = [
  {id:1, name: 'AUDI', image: img1, price:200, color: 'Black', code: '#715637',engineCapacity: '6000cc'},
  {id:2, name: 'Honda', image: img2, price:200, color: 'Black', code: '#715637',engineCapacity: '6000cc'},
  {id:3, name: 'VOLVO', image: img3, price:200, color: 'Black',code: '#715637',engineCapacity: '6000cc'},
  {id:4, name: 'BMW', image: img4, price:200, color: 'Black', code: '#715637',engineCapacity: '6000cc'},
  {id:5, name: 'AUDI', image: img1, price:200, color: 'Black', code: '#715637',engineCapacity: '6000cc'},
  {id:6, name: 'Honda', image: img2, price:200, color: 'Black', code: '#715637',engineCapacity: '6000cc'},
];

const TopCategories = () => {
  const { addToCart } = useCart();

  const handleBuyNowClick = (car) => {
    addToCart(car);
    console.log(car);
  }
  return (
    <>
      <CategoryTitle>Top Categories</CategoryTitle>
      <TopCategoriesContainer>
        {cars.map((car, index) => (
          <Card key={index}>
            <CarImage src={car.image} alt={car.name} />
            <CarInfo>
              <CarName>{car.name}</CarName>
              <CarDetails>4 Seater · Manual · 500KM/H</CarDetails>
              <Price>Starting at ${car.price}/</Price>
              <Button onClick={handleDetailsClick}>Details</Button>
              <Button onClick={() => handleBuyNowClick(car)}>Buy Now</Button>
            </CarInfo>
          </Card>
        ))}
      </TopCategoriesContainer>
    </>
  );
};

export default TopCategories;