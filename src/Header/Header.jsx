import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../images/Logo.png'
import cart from '../images/cart.svg'



const NavbarContainer = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;
background-color: #FFFFFF; 
  /* تغيير لون الخلفية إلى الأبيض */
`;

const Logo = styled.div`
  font-family: 'Righteous';
  color: #976E72; /* تم تعديل اللون ليتوافق مع الصورة */
`;

const Nav = styled.nav`
display: flex;
justify-content: center; // Center the navigation items
align-items: center;
width: 100%;

@media (min-width: 769px) {
  flex-direction: row;
}

@media (max-width: 768px) {
  flex-direction: column;
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  background-color: #fff;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  z-index: 10;
    justify-content: space-around; // This will add space around each link
}
`;


const StyledLink = styled(Link)`
  font-family: "Righteous", sans-serif;
  margin: 0 1rem;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  position: relative; /* لتحديد الموضع النسبي للعناصر الداخلية */

  &:hover {
    color: #976E72;
    &:after { /* إضافة الخط تحت النص */
      content: ''; /* القيمة الافتراضية لإضافة عنصر بعد النص */
      display: block;
      width: 100%;
      height: 2px; /* سمك الخط */
      background-color: #976E72;
      position: absolute; /* التحكم في موضع الخط بشكل مطلق داخل الرابط */
      bottom: -5px; /* المسافة بين الخط والنص */
      left: 0;
    }
    &:not(:last-child) {
      margin-bottom: 1rem; // Adds spacing between links for the mobile menu
    }
  
  }
  @media (max-width: 768px) {
    display: block; // Ensures each link takes up the full width
    margin-bottom: 1.5rem; // Adjust this value to increase spacing
    font-size: 1.2rem; // Optional: Increase font size for better mobile readability
  }

`;


const Actions = styled.div`
display: flex;
align-items: center;

@media (max-width: 768px) {
  flex-direction: column;
  position: absolute;
  top: 60px;
  right: 2rem;
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  background-color: #fff;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  z-index: 10;
}
`;

const ShoppingCartIcon = styled.span`
  margin-right: 1rem;
  cursor: pointer;
  @media (max-width: 768px) {
   display:none;
  }
`;
const LogoImage = styled.img`
  width: 169px;
  height: 40px;
`;


const RegisterButton = styled.button`
  background-color: transparent;
  border: 2px solid #976E72; /* تغيير سمك الحد ليكون أكثر وضوحا */
  border-radius: 20px; /* الشكل الهندسي للزر */
  padding: 0.5rem 1rem;
  color: #976E72;
  font-weight: bold;
  font-size: 1rem; /* توحيد حجم الخط مع باقي العناصر */
  cursor: pointer;

  &:hover {
    background-color: #976E72; /* تغيير لون الخلفية عند التحويم */
    color: white; /* تغيير لون النص عند التحويم إلى الأبيض */
  }
  @media (max-width: 768px) {
    display:none;
  }
`;
const MobileMenuIcon = styled.div`
  display: none; // By default, the mobile menu icon is not displayed
  @media (max-width: 768px) {
    display: block; // Show the mobile menu icon on small screens
    cursor: pointer;
  }
`;
const HamburgerIcon = () => (
  <svg width="30" height="30" viewBox="0 0 100 80" fill="#976E72">
    <rect width="100" height="10"></rect>
    <rect y="30" width="100" height="10"></rect>
    <rect y="60" width="100" height="10"></rect>
  </svg>
);
const handleCartClick = () => {
  window.location.href = '/cart'; // استبدل بالرابط المطلوب
};

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };
  return (
    <NavbarContainer>
      <Logo>
        <LogoImage src={logo} alt='Logo' />
      </Logo>
      <MobileMenuIcon onClick={toggleNav}>
        <HamburgerIcon />
      </MobileMenuIcon>
      <Nav isVisible={isNavVisible}>
        <StyledLink to="/" onClick={toggleNav}>Home</StyledLink>
        <StyledLink to="/catalogue" onClick={toggleNav}>Catalogue</StyledLink>
        <StyledLink to="/contact" onClick={toggleNav}>Contact Us</StyledLink>
        <StyledLink to="/help" onClick={toggleNav}>Help</StyledLink>
      </Nav>
      <Actions isVisible={isNavVisible}>
        <ShoppingCartIcon onClick={toggleNav}>
          <img src={cart} alt='Cart' style={{width:39, height:35}} onClick={handleCartClick}/>
        </ShoppingCartIcon>
        <RegisterButton onClick={toggleNav}>Register</RegisterButton>
      </Actions>
    </NavbarContainer>
  );
};

export default Header;
