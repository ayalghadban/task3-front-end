import React from 'react';
import styled from 'styled-components';

const CarTypeContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 20px;
  gap: 20px; // This creates space between the items
  align-items: center;
`;

const CarTypeCard = styled.div`
  flex: 0 0 auto; // This prevents the cards from shrinking and enables scrolling
  width: 200px; // Adjust the width as needed
  height: 120px; // Adjust the height as needed
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  background-position: center;
  background-size: cover;
`;

const CarTypeName = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  font-weight: bold;
`;

const FindByCarType = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

// Sample data - replace with your actual data and images
const carTypes = [
  { name: 'Volvo', image: 'path-to-volvo-image.jpg' },
  { name: 'Bugatti', image: 'path-to-bugatti-image.jpg' },
  { name: 'BMW', image: 'path-to-bmw-image.jpg' },
  { name: 'Audi', image: 'path-to-audi-image.jpg' },
];

const CarTypeSelector = () => {
  return (
    <>
      <FindByCarType>Find by Car Type</FindByCarType>
      <CarTypeContainer>
        {carTypes.map((car) => (
          <CarTypeCard key={car.name} style={{ backgroundImage: `url(${car.image})` }}>
            <CarTypeName>{car.name}</CarTypeName>
          </CarTypeCard>
        ))}
      </CarTypeContainer>
    </>
  );
};

export default CarTypeSelector;
