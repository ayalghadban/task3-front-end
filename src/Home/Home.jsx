import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: #ececec; // Replace with the actual color or image
`;

const Slogan = styled.div`
  text-align: left;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  margin-bottom: 2rem;
`;

const ExploreButton = styled.button`
  padding: 1rem 2rem;
  border: none;
  background-color: #000; // Replace with the actual button color
  color: white;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 20px;
`;

const CarImage = styled.img`
  width: 300px; // Adjust size accordingly
  height: auto;
`;

const SearchSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: #f8f8f8; // Replace with the actual color
`;

const Filter = styled.select`
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color: #000; // Replace with the actual button color
  color: white;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 20px;
`;

// The component
const Home = () => {
  return (
    <>
      <HeroSection>
        <Slogan>
          <Subtitle>Arriving Summer 2019</Subtitle>
          <Title>MAKE EVERY DAY LEGENDARY.</Title>
          <p>The culmination of comfort, luxury, and powerful living is embodied in the First-Ever BMUX7 – the biggest BMU ever built.</p>
          <ExploreButton>EXPLORE</ExploreButton>
        </Slogan>
        <CarImage src="../images/picture.png" alt="Luxury Car" />
      </HeroSection>
      <SearchSection>
        <Filter name="name">
          <option value="">Choose name</option>
          {/* Option elements */}
        </Filter>
        <Filter name="price">
          <option value="">Choose price</option>
          {/* Option elements */}
        </Filter>
        <Filter name="capacity">
          <option value="">Choose capacity</option>
          {/* Option elements */}
        </Filter>
        <Filter name="brand">
          <option value="">Choose brand</option>
          {/* Option elements */}
        </Filter>
        <SearchButton>Search</SearchButton>
      </SearchSection>
    </>
  );
};

export default Home;
