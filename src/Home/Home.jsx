import React from 'react';
import styled from 'styled-components';
import pic from '../images/IMG_20240301_075813_542.png'
import back from '../images/Vector 1.png'



const CarImage = styled.img`
  width: 70%; // Adjust size accordingly
  height: 100%;
  background: url(${back});
  background-size:cover;
`;

const HeroSection = styled.div`
  font-family: 'Righteous';
  display: flex;
  justify-content: center; // مركزة المحتوى في المنتصف
  padding: 2rem;
  background-color: #fff;
`;

const Slogan = styled.div`
  text-align: center; // تغيير محاذاة النص إلى الوسط
  max-width: 600px; // تحديد العرض الأقصى للنص
`;

const Title = styled.h1`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 64px; // تصغير حجم الخط
  margin-bottom: 1rem; // تعديل التباعد
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
`;

const SearchSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding:1rem 2rem;
  background-color: #ececec; // تغيير لون الخلفية
  margin: 0 150px; // توسيط القسم
  border-radius: 30px; 
`;

const Filter = styled.select`
  padding: 0.5rem 1rem;
  margin-top: 0.3rem; // إضافة هامش علوي
  border: 1px solid #ddd;
  border-radius: 20px; // تقريب الحواف
  font-size: 0.8rem;
  color: #6f6f6f; // تغيير لون النص
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
