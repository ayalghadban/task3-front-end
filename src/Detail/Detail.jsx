import React, { useState } from 'react';
import styled from 'styled-components';

const ProductDetailContainer = styled.div`
  display: flex;
  background-color: #FFFFFF; // White background
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); // Slight shadow
  border-radius: 20px; // Rounded corners
  overflow: hidden;
  max-width: 900px;
  margin: 40px auto; // Center the container with margin
`;

const ImageSection = styled.div`
  flex: 3;
  background-color: #F8F9FA; // Light grey background
  padding: 20px;
`;

const MainImage = styled.img`
  display: block;
  max-width: 100%;
  margin: 0 auto; // Center the image
  border-radius: 10px; // Rounded corners for image
`;

const DetailsSection = styled.div`
  flex: 5;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProductTitle = styled.h1`
  font-size: 2.5em;
  margin: 0 0 20px;
  color: #333; // Darker font color
`;

const ProductDescription = styled.p`
  margin: 0 0 20px;
  color: #666; // Medium grey font color
`;

const ProductPrice = styled.p`
  margin: 0 0 20px;
  font-size: 1.5em;
  color: #333;
  font-weight: bold;
`;

const AddToCartButton = styled.button`
  padding: 10px 15px;
  background-color: #000; // Black background
  color: #fff; // White text
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #555; // Dark grey on hover
  }
`;

const BuyNowButton = styled(AddToCartButton)`
  background-color: #e50000; // Red background
  &:hover {
    background-color: #C50000; // Dark red on hover
  }
`;

const ProductDetails = () => {
  const [product] = useState({
    name: 'Porsche 911',
    description: 'A masterpiece of design, the Porsche 911 has been the flagship of the brand for decades.',
    price: '€200,000',
    mainImage: '/path/to/main/image.jpg', // Update with the path to your main image
    images: ['/path/to/thumb1.jpg', '/path/to/thumb2.jpg'], // Update with paths to your images
  });

  return (
    <ProductDetailContainer>
      <ImageSection>
        <MainImage src={product.mainImage} alt={product.name} />
      </ImageSection>
      <DetailsSection>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>{product.price}</ProductPrice>
        <AddToCartButton>Add to Cart</AddToCartButton>
        <BuyNowButton>Buy Now</BuyNowButton>
      </DetailsSection>
    </ProductDetailContainer>
  );
};

export default ProductDetails;
