import React from 'react';
import styled from 'styled-components';

const TopCategoriesContainer = styled.section`
  max-width: 1200px; // Adjust based on your layout
  margin: auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  text-align: center;
`;

const CategoryTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const CarImage = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd;
`;

const CarInfo = styled.div`
  padding: 1rem;
`;

const CarName = styled.h3`
  margin: 0.5rem 0;
`;

const CarDetails = styled.p`
  margin: 0.5rem 0;
  color: #555;
`;

const DetailsButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const BuyButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 0.5rem;

  &:hover {
    background-color: #0056b3;
  }
`;

// Mock data
const cars = [
  { name: 'AUDI', price: '$500/Day', image: 'audi.jpg' },
  { name: 'Honda', price: '$500/Day', image: 'honda.jpg' },
  { name: 'VOLVO', price: '$500/Day', image: 'volvo.jpg' },
  { name: 'BMW', price: '$500/Day', image: 'bmw.jpg' },
];

const TopCategories = () => {
  return (
    <TopCategoriesContainer>
      <CategoryTitle>Top Categories</CategoryTitle>
      {cars.map((car, index) => (
        <Card key={index}>
          <CarImage src={car.image} alt={car.name} />
          <CarInfo>
            <CarName>{car.name}</CarName>
            <CarDetails>{car.price}</CarDetails>
            <DetailsButton>Details</DetailsButton>
            <BuyButton>Buy Now</BuyButton>
          </CarInfo>
        </Card>
      ))}
    </TopCategoriesContainer>
  );
};

export default TopCategories;
