import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import img1 from '../images/IMG_20240301_075813_542.png';
import img2 from '../images/Rectangle 50.png'
import img3 from '../images/Rectangle 50 (1).png'
import img4 from '../images/Rectangle 50 (2).png'
import Header from '../Header/Header'
import sahm from '../icons/chevron-right.svg'
import img5 from '../images/Vector 1 (1).png'
import { css } from 'styled-components';
import Footer from '../Footer/Footer';
import star from '../icons/star.svg'
import img6 from '../icons/star.png'
import QuantitySelector from './plus';
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
  max-width: 50%;
  ${media.phone`max-width:100%; margin-top:80px;`}

`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 50;
  font-family: 'Righteous';
  font-weight: 400;
  font-size:60;
`;



const EngineCapacity = styled.p`
  color: #a17e7e;
  font-size: 30px;
  margin-bottom: 120;
  font-family: 'Righteous';

`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Rating = styled.span`
  color: #a17e7e; // Gold color for rating stars
  margin-right: 0.3rem;
`;

const ReviewCount = styled.span`
  color: #666;
`;

const Description = styled.p`
  color: #333;
  margin: 1rem 0;
  margin-right: 5rem;
  font-size:23;
  font-family: 'Righteous';
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
const BackgroundImage = styled.img`
  max-width: 60%;
  width: 100%;
  height: 95%;
  object-fit: fill;
  position: absolute;
  top: 4.5rem;
  right: -10px;
  z-index: -1;
  overflow-x: hidden;
`;
const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailTitle = styled.div`
  color: rgba(0, 0, 0, 0.77);
  font-size: 40px;
  font-family: 'Righteous';
  font-weight: 400;
  letter-spacing: 0.10;
  word-wrap: 'break-word';
  ${media.desktop`margin-bottom: 80px;`}
`;

const Subtitle = styled(DetailTitle)`
  font-size: 20px;
  margin-top: 80px;
  margin-bottom: 15px;
`;

const StarRating = styled(Rating)`
  display: inline-block;
  margin-right: 0.3rem;
`;
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden; // هذا يخفي السكرول بار الأفقي
  }
`;

const CarDetails = () => {
  const [currentImg, setCurrentImg] = useState(img1);

  return (
    <>
          <GlobalStyle />
          <BackgroundImage src={img5} alt="" />
    <Header/>
    <Container>
      <div style={{ display:'flex' , flexDirection:'column'}}>
          <Title>Honda - Civic Type R</Title>
          <EngineCapacity>6000 cc</EngineCapacity>
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
      </div>
      <DetailsContainer>
      <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex' , marginBottom:'80px'}}>
<div style={{color: 'rgba(0, 0, 0, 0.77)', fontSize: 40, fontFamily: 'Righteous', fontWeight: '400', letterSpacing: 0.10, wordWrap: 'break-word',}}>Details</div>
</div>
<div style={{color: 'rgba(0, 0, 0, 0.77)', fontSize: 20, fontFamily: 'Righteous', fontWeight: '400', letterSpacing: 0.10, wordWrap: 'break-word',marginTop:'80px', marginBottom:'15'}}>Rating And Review</div>
        <RatingContainer>
          <Rating><img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={img6} alt=''></img>
          </Rating>
          <ReviewCount>4.5</ReviewCount>
        </RatingContainer>
        <Description>
          The culmination of comfort, luxury, and powerful living is embodied in the First-Ever BMUX7 – the biggest BMU ever built.
        </Description>
        <ColorOptions>
          <ColorOption color="#000" /> {/* Black */}
          <ColorOption color="orange" /> {/* White */}
          <ColorOption color="#5F9EA0" /> {/* CadetBlue */}
          {/* Add more color options as needed */}
        </ColorOptions>
        <div style={{ display:'flex',gap:'20px' }}>
        <QuantitySelector/>
        <Price>Price: 250 $</Price>
        </div>
        <Button>Add To Cart</Button>
        <Button>Buy Now</Button>
      </DetailsContainer>
    </Container>
    <Footer/>
    </>
  );
};

export default CarDetails;
