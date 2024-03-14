import React, { useState } from 'react';
import styled from 'styled-components';
import img1 from '../images/IMG_20240301_075813_542.png';
import img2 from '../images/Rectangle 50.png'
import img3 from '../images/Rectangle 50 (1).png'
import img4 from '../images/Rectangle 50 (2).png'
import Header from '../Header/Header'
import sahm from '../icons/chevron-right.svg'

import { css } from 'styled-components';
import Footer from '../Footer/Footer';

// أضف هذه الوظيفة لتسهيل استخدام الإعلام المختلفة
const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

// استخدم الإعلام المختلفة في مكوناتك
const Container = styled.div`
  display: flex;
  margin: 2rem;
  align-items: center;
  justify-content: space-around;

  ${media.desktop`justify-content: space-between;`}
  ${media.tablet`flex-direction: column; align-items: stretch;`}
  ${media.phone`margin: 1rem;`}
`;

const ImageContainer = styled.div`
  flex: 1;
  margin-right: 2rem;
`;

const MainImage = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
`;

const ThumbnailsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

const DetailsContainer = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 0.5rem;
`;

const EngineCapacity = styled.p`
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Rating = styled.span`
  color: #a17e7e; // Gold color for rating stars
  margin-right: 0.5rem;
`;

const ReviewCount = styled.span`
  color: #666;
`;

const Description = styled.p`
  color: #333;
  margin: 1rem 0;
`;

const ColorOptions = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;

const ColorOption = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${props => props.color};
  margin-right: 1rem;
  cursor: pointer;

  &:hover {
    border: 2px solid #000;
  }
`;

const Price = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #a17e7e;
  margin: 1rem 0;
`;

const Button = styled.button`
  background-color: #a17e7e;
  color: #fff;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-right: 1rem;

  &:hover {
    background-color: #965f5f;
  }
`;

const CarDetails = () => {
  const [currentImg, setCurrentImg] = useState(img1);

  return (
    <>
    <Header/>
    <Container>
      <ImageContainer>
        <MainImage src={currentImg} alt="Car Main" />
        <ThumbnailsContainer>
          {/* Update the state to the clicked thumbnail's src */}
          <Thumbnail src={img1} alt="Thumbnail 1" onClick={() => setCurrentImg(img1)} />
          <Thumbnail src={img2} alt="Thumbnail 2" onClick={() => setCurrentImg(img2)} />
          <Thumbnail src={img3} alt="Thumbnail 3" onClick={() => setCurrentImg(img3)} />
          <Thumbnail src={img4} alt="Thumbnail 4" onClick={() => setCurrentImg(img4)} />
          {/* Add more thumbnails with onClick as needed */}
        </ThumbnailsContainer>
      </ImageContainer>
      <DetailsContainer>
        <Title>Honda - Civic Type R</Title>
        <EngineCapacity>6000 cc</EngineCapacity>
        <RatingContainer>
          <Rating>★★★★☆</Rating>
          <ReviewCount>4.5</ReviewCount>
        </RatingContainer>
        <Description>
          The culmination of comfort, luxury, and powerful living is embodied in the First-Ever BMUX7 – the biggest BMU ever built.
        </Description>
        <ColorOptions>
          <ColorOption color="#000" /> {/* Black */}
          <ColorOption color="#fff" /> {/* White */}
          <ColorOption color="#5F9EA0" /> {/* CadetBlue */}
          {/* Add more color options as needed */}
        </ColorOptions>
        <Price>Price: 250 $</Price>
        <Button>Add To Cart</Button>
        <Button>Buy Now</Button>
      </DetailsContainer>
    </Container>
    <Footer/>
    </>
  );
};

export default CarDetails;
