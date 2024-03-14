import React, { useRef } from 'react';
import styled from 'styled-components';
import img1 from '../images/dhiva-krishna-GRV4ypBKgxE-unsplash.jpg'
import img2 from '../images/joey-banks-YApiWyp0lqo-unsplash.jpg'
import img3 from '../images/josh-berquist-_4sWbzH5fp8-unsplash.jpg'
import img4 from '../images/mathieu-renier-4WBvCqeMaDE-unsplash.jpg'
import leftArrowImg from '../icons/Frame 106.svg';
import rightArrowImg from '../icons/Frame 96.svg';


const CarTypeContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 20px;
  gap: 20px; // This creates space between the items
  align-items: center;
  scroll-snap-type: x mandatory;
  justify-content: center;
  position:relative;
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

const Arrow = styled.img`
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;

  // ستايل للسهم الأيمن
  ${({ right }) => right && `
    right: 10px;
  `}

  // ستايل للسهم الأيسر
  ${({ left }) => left && `
    left: 10px;
  `}
`;
const FindByCarType = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;
const ScrollButton = styled.button`
  display: block; // By default, we don't show scroll buttons
  
  @media (max-width: 768px) {
    display: block; // Show scroll buttons on mobile devices
    position: absolute; 
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    cursor: pointer;

    &:first-of-type {
      left: 10px;
    }

    &:last-of-type {
      right: 10px;
    }
  }
`;

const carTypes = [
  { name: 'Volvo', image: img1 },
  { name: 'Bugatti', image: img2 },
  { name: 'BMW', image:img3 },
  { name: 'Audi', image: img4 },
];
const CarTypeSelector = () => {
  const containerRef = useRef();
  const scroll = (direction) => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth } = containerRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      containerRef.current.scrollBy({ left: scrollTo, behavior: 'smooth' });
    }
  };
  return (
    <>
       <FindByCarType>Find by Car Type</FindByCarType>
      <CarTypeContainer ref={containerRef}>
        <Arrow src={leftArrowImg} left onClick={() => scroll('left')} />
        <Arrow src={rightArrowImg} right onClick={() => scroll('right')} />
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
