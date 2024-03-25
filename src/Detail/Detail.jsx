import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import img1 from '../images/IMG_20240301_075813_542.png';
import Header from '../Header/Header'
import { css } from 'styled-components';
import Footer from '../Footer/Footer';
import QuantitySelector from './plus';
import { useParams } from 'react-router-dom';
import data from '../Top Categories/data'
import { useCart } from '../Cart/CartContext';
const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

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
  const [quantity, setQuantity] = useState(1);
  const { carId } = useParams();
  const [car, setCar] = useState(null);
  useEffect(() => {
    const carData = data.find((item) => item.id === parseInt(carId, 10));
    if (carData) {
      setCar(carData);
      setCurrentImg(carData.mainImage);
    } else {
      // يمكنك هنا التعامل مع حالة عدم العثور على السيارة
      console.error('Car not found!');
    }
  }, [carId]);
  const [selectedColor, setSelectedColor] = useState('');
  useEffect(() => {
    if (car) {
      setSelectedColor(car.chosenColor);
    }
  }, [car]);
  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const { addToCart } = useCart(); // استخدام الوظيفة من CartContext

  const handleAddToCart = () => {
    // إنشاء كائن بالبيانات المراد إضافتها إلى السلة
    const itemToAdd = {
      id: car.id,
      name: car.carname,
      image: currentImg, // أو car.mainImage إذا كنت تريد الصورة الرئيسية دائماً
      engineCapacity: car.engineCapacity,
      color: selectedColor,
      quantity: quantity,
      price: car.price,
    };

    addToCart(itemToAdd);
  };
  if (!car) {
    return <div>Loading...</div>;
  }
  return (
    <>
  <GlobalStyle />
      <Header />
      <Container>
        <ImageContainer>
          <MainImage src={currentImg} alt="Car Main" />
          <ThumbnailsContainer>
            {car.images && car.images.map((img, index) => (
              <Thumbnail key={index} src={img} alt={`Thumbnail ${index}`} onClick={() => setCurrentImg(img)} />
            ))}
          </ThumbnailsContainer>
        </ImageContainer>
        <DetailsContainer>
          <Title>{car.carname}</Title>
          <EngineCapacity>{car.engineCapacity} cc</EngineCapacity>
          <RatingContainer>
            {/* يمكنك استبدال هذا بمكون تقييم مخصص إذا كنت تستخدم واحدًا */}
            <Rating>{'⭐'.repeat(Math.floor(car.rating))}</Rating>
            <ReviewCount>{car.rating}</ReviewCount>
          </RatingContainer>
          <Description>{car.description}</Description>
          <ColorOptions>
  {car.colors.map((color, index) => (
    <ColorOption 
      key={index} 
      color={color} 
      onClick={() => handleColorClick(color)}
      style={{ border: selectedColor === color ? '2px solid #000' : '' }} // هذا سيضيف حدودًا للخيار المختار
    />
  ))}
</ColorOptions>
          <div style={{ display:'flex',gap:'20px' }}>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <Price>Price: {car.price * quantity} $</Price>
        </div>
        <Button onClick={handleAddToCart}>Add To Cart</Button>
        <Button>Buy Now</Button>
        </DetailsContainer>
      </Container>
      <Footer />
    </>
  );
};

export default CarDetails;