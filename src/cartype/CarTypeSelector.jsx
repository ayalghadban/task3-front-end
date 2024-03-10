import React from 'react';
import styled from 'styled-components';
import img1 from '../images/dhiva-krishna-GRV4ypBKgxE-unsplash.jpg'
import img2 from '../images/joey-banks-YApiWyp0lqo-unsplash.jpg'
import img3 from '../images/josh-berquist-_4sWbzH5fp8-unsplash.jpg'
import img4 from '../images/mathieu-renier-4WBvCqeMaDE-unsplash.jpg'

const CarTypeContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 20px;
  gap: 20px; // This creates space between the items
  align-items: center;
  scroll-snap-type: x mandatory;
  justify-content: center;
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
  scroll-snap-align: start;
  &:hover {
    &::after {
      content: "${(props) => props.name}";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5); // Semi-transparent overlay
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 20px; // Large text
      border-radius: 10px;
    }
  }
`;

const FindByCarType = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

// Sample data - replace with your actual data and images
const carTypes = [
  { name: 'Volvo', image: img1 },
  { name: 'Bugatti', image: img2 },
  { name: 'BMW', image:img3 },
  { name: 'Audi', image: img4 },
];

const CarTypeSelector = () => {
  return (
    <>
      <FindByCarType>Find by Car Type</FindByCarType>
      <CarTypeContainer>
        {carTypes.map((car) => (
          <CarTypeCard
            key={car.name}
            name={car.name}
            style={{ backgroundImage: `url(${car.image})` }}
          />
        ))}
      </CarTypeContainer>
    </>
  );
};

export default CarTypeSelector;
