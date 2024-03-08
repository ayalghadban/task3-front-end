import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  display: flex;
  margin: 20px;
`;

const ImageSection = styled.div`
  flex: 1;
`;

const DetailsSection = styled.div`
  flex: 2;
  padding: 0 20px;
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
`;

const Thumbnails = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Thumbnail = styled.img`
  width: 60px;
  height: auto;
  margin: 0 5px;
  cursor: pointer;
  border: 2px solid ${props => (props.active ? '#000' : 'transparent')};
`;

const Title = styled.h1`
  margin-top: 0;
`;

const Rating = styled.div`
  // Implement rating stars based on your design and logic
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
`;

const Price = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

const Button = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

const Details = styled.div`
  margin-bottom: 20px;
`;

// Example Product Data
const productData = {
  title: 'Honda - Civic Type R',
  images: [
    'image-main.jpg', // Main image
    'image-thumb-1.jpg',
    'image-thumb-2.jpg',
    'image-thumb-3.jpg',
    // Add more images if needed
  ],
  description: 'The culmination of comfort, luxury, and powerful living is embodied in the First-Ever BMUX7 – the biggest BMU ever built.',
  price: '250 $',
  rating: 4.5, // This would be a dynamic value in a real app
  // Add more product details if needed
};

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState(productData.images[0]);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <Container>
      <ImageSection>
        <MainImage src={mainImage} alt="Main Car" />
        <Thumbnails>
          {productData.images.map((img, index) => (
            <Thumbnail
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              onClick={() => handleThumbnailClick(img)}
              active={mainImage === img}
            />
          ))}
        </Thumbnails>
      </ImageSection>
      <DetailsSection>
        <Title>{productData.title}</Title>
        <Rating>{/* Render rating stars based on productData.rating */}</Rating>
        <Details>
          <Description>{productData.description}</Description>
          <Price>{productData.price}</Price>
        </Details>
        <div>
          <Button onClick={() => console.log('Added to cart')}>Add To Cart</Button>
          <Button onClick={() => console.log('Purchased')}>Buy Now</Button>
        </div>
      </DetailsSection>
    </Container>
  );
};

export default ProductDetails;
