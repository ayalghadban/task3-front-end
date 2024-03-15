import React, { useRef } from 'react';
import styled from 'styled-components';
import img1 from '../images/dhiva-krishna-GRV4ypBKgxE-unsplash.jpg';
import img2 from '../images/joey-banks-YApiWyp0lqo-unsplash.jpg';
import img3 from '../images/josh-berquist-_4sWbzH5fp8-unsplash.jpg';
import img4 from '../images/mathieu-renier-4WBvCqeMaDE-unsplash.jpg';
import Slider from 'react-slick';
const CarTypeContainer = styled.div`
display: flex;
overflow-x: auto;
padding: 20px;
gap: 20px;
align-items: center;
scroll-snap-type: x mandatory;
justify-content: center;
position: relative;

&::-webkit-scrollbar {
  display: none;  // for Chrome, Safari, and Opera
}

-ms-overflow-style: none;  // for Internet Explorer and Edge
scrollbar-width: none;  // for Firefox

@media (max-width: 768px) {
  padding: 10px;
  gap: 10px;
};
`;

const CarTypeCard = styled.div`
  flex: 0 0 auto;
  width: 200px;
  height: 120px;
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
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 20px;
      border-radius: 10px;
    }
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 100px;
    &:hover {
      &::after {
        font-size: 16px;
      }
    }
  }
`;

const FindByCarType = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;
const carTypes = [
  { name: 'Volvo', image: img1 },
  { name: 'Bugatti', image: img2 },
  { name: 'BMW', image: img3 },
  { name: 'Audi', image: img4 },
  { name: 'Volvo', image: img1 },
  { name: 'Bugatti', image: img2 },
  { name: 'BMW', image: img3 },
  { name: 'Audi', image: img4 },
  { name: 'Volvo', image: img1 },
  { name: 'Bugatti', image: img2 },
  { name: 'BMW', image: img3 },
  { name: 'Audi', image: img4 },
];

const CarTypeSelector = () => {
  const containerRef = useRef();
  const scroll = (direction) => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth } = containerRef.current;
      const scrollTo =
        direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      containerRef.current.scrollBy({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <>
      <FindByCarType>Find by Car Type</FindByCarType>
      <CarTypeContainer ref={containerRef}>
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
