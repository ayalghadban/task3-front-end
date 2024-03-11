import React, { useState } from 'react';
import styled from 'styled-components';
import img1 from '../images/IMG_20240301_075813_542.png';
import img2 from '../images/Rectangle 50.png'
import img3 from '../images/Rectangle 50 (1).png'
import img4 from '../images/Rectangle 50 (2).png'
import Header from '../Header/Header'

const ProductDetailContainer = styled.div`
  display: flex;
  background-color: #FFFFFF;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  overflow: hidden;
  max-width: 900px;
  margin: 40px auto;
`;

const ImageSection = styled.div`
  flex: 3;
  background-color: #F8F9FA;
  padding: 20px;
  position: relative;
`;

const MainImage = styled.img`
  display: block;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 10px;
`;

const ThumbnailContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 20px;
  display: flex;
  gap: 10px;
`;

const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 10px;
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
  color: #333;
`;

const RatingAndReview = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2em;
`;

const StarRating = styled.div`
  // Style for the star rating will go here
`;

const ProductDescription = styled.p`
  margin: 20px 0;
  color: #666;
`;

const ColorSelection = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const ColorCircle = styled.span`
  display: inline-block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin-right: 10px;
  cursor: pointer;
  border: 2px solid ${props => props.selected ? '#000' : 'transparent'};
`;

const Price = styled.p`
  font-size: 1.5em;
  color: #333;
  font-weight: bold;
  margin: 20px 0;
`;

const AddToCartButton = styled.button`
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #555;
  }
`;

const BuyNowButton = styled(AddToCartButton)`
  background-color: #555;
  &:hover {
    background-color: #333;
  }
`;

const ProductDetails = () => {
  const [product, setProduct] = useState({
    name: 'Porsche 911',
    description: 'A masterpiece of design, the Porsche 911 has been the flagship of the brand for decades.',
    price: '€200,000',
    images: [img1, img2, img3, img4],
    mainImageIndex: 0,
  });

  const setMainImage = (index) => {
    setProduct({ ...product, mainImageIndex: index });
  };

  return (
    <>
    <Header/>
      <ProductDetailContainer>
        <ImageSection>
          <MainImage src={product.images[product.mainImageIndex]} alt="Car image" />
          <ThumbnailContainer>
            {product.images.map((img, index) => (
              <Thumbnail
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setMainImage(index)}
              />
            ))}
          </ThumbnailContainer>
        </ImageSection>
        <DetailsSection>
          <ProductTitle>{product.name}</ProductTitle>
          <RatingAndReview>
            {/* Insert star rating component */}
            4.5
          </RatingAndReview>
          <ProductDescription>{product.description}</ProductDescription>
          <ColorSelection>
            {/* Insert color circles */}
          </ColorSelection>
          <Price>{product.price}</Price>
          <AddToCartButton>Add to Cart</AddToCartButton>
          <BuyNowButton>Buy Now</BuyNowButton>
        </DetailsSection>
      </ProductDetailContainer>
    </>
  );
};

export default ProductDetails;
