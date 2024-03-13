import React from 'react';
import styled, { css } from 'styled-components';
import pic from '../images/IMG_20240301_075813_542.png'
import back from '../images/Vector 1.png'
import icon1 from '../icons/Frame 71.svg'
const CarImage = styled.img`
  width: 70%; // Adjust size accordingly
  height: 100%;
  background: url(${back});
  background-size:cover;
  @media (max-width: 768px) {
    width: 100%; // زيادة العرض للشاشات الصغيرة
  }
`;
const responsiveSection = css`
  display: flex;
  justify-content: center;
  padding: 2rem;
  background-color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; // تعديل التوجيه ومحاذاة العناصر للشاشات الصغيرة
  }
`;

const HeroSection = styled.div`
  ${responsiveSection};
`;

const Slogan = styled.div`
  text-align: center; // تغيير محاذاة النص إلى الوسط
  max-width: 600px; // تحديد العرض الأقصى للنص
  @media (max-width: 768px) {
    order: -1; // وضع الشعار قبل الصورة على الشاشات الصغيرة
  }
`;


const Title = styled.h1`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 64px; // تصغير حجم الخط
  margin-bottom: 1rem; // تعديل التباعد
  @media (max-width: 768px) {
    font-size: 2rem; // تصغير حجم الخط للشاشات الصغيرة
  }
`;

const Subtitle = styled.p`
  font-family: 'Righteous';
  margin-bottom: 1rem; // تعديل التباعد
`;

const ExploreButton = styled.button`
  font-family: 'Righteous';
  padding: 0.8rem 1.6rem; // تعديل الحشوة لتصغير حجم الزر
  border: none;
  background-color: #a17e7e; // تغيير لون الزر
  color: white;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 20px;
`;
const FilterLabel = styled.label`
font-size: 0.8rem;
font-weight: bold;
color: #000;
margin-right: 0.5rem;
font-family: 'Righteous';
`;

const FilterContainer = styled.div`
display: flex;
flex-direction: column;
padding: 0 2rem;
position: relative; // تعيين الموقف النسبي لإضافة الأيقونات
@media (max-width: 768px) {
  padding: 0.5rem 0;
}
`;

const SearchSection = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 1rem 2rem;
background-color: #ececec;
margin: 0 150px;
border-radius: 30px;

@media (max-width: 768px) {
  flex-direction: column;
  margin: 3rem;
  padding: 1rem;
}
`;

const Filter = styled.select`
padding: 0.5rem 1rem;
margin-top: 0.3rem;
border: none; // إزالة الحدود
border-radius: 20px;
font-size: 0.8rem;
color: #6f6f6f;
background-color: #ececec
@media (max-width: 768px) {
  width: 100%;
  margin-top: 0.5rem;
}

&:after {
  content: url(${icon1}); // إضافة مسار الأيقونة اليمنى
  position: relative;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}
`;

const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color: #a17e7e; // تغيير لون الزر ليطابق الصورة الثانية
  color: white;
  font-size: 0.8rem;
  cursor: pointer;
  border-radius: 20px;
  margin-left: 1rem; // إضافة هامش جانبي
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 1rem; // إضافة مسافة بعد العناصر السابقة
    width: 50%; // جعل الزر بعرض كامل
  }
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
        <CarImage src={pic} alt="Luxury Car" />
      </HeroSection>
      <SearchSection>
  <FilterContainer>
    <FilterLabel>Name</FilterLabel>
    <Filter name="name">
      <option value="">Choose name</option>
      {/* Option elements */}
    </Filter>
  </FilterContainer>
  <FilterContainer>
    <FilterLabel>Price</FilterLabel>
    <Filter name="price">
      <option value="">Choose price</option>
      {/* Option elements */}
    </Filter>
  </FilterContainer>
  <FilterContainer>
    <FilterLabel>Engine Capacity</FilterLabel>
    <Filter name="capacity">
      <option value="">Choose capacity</option>
      {/* Option elements */}
    </Filter>
  </FilterContainer>
  <FilterContainer>
    <FilterLabel>Brand</FilterLabel>
    <Filter name="brand">
      <option value="">Choose brand</option>
      {/* Option elements */}
    </Filter>
  </FilterContainer>
  <SearchButton>Search</SearchButton>
</SearchSection>
    </>
  );
};

export default Home;
