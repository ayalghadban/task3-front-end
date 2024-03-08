import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../images/Logo.png'
import cart from '../images/cart.svg'
const NavbarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #FFFFFF; /* تغيير لون الخلفية إلى الأبيض */
`;

const Logo = styled.div`
  font-family: 'Righteous';
  color: #976E72; /* تم تعديل اللون ليتوافق مع الصورة */
`;

const Nav = styled.nav`
  display: flex;
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
  }
`;


const Actions = styled.div`
  display: flex;
  align-items: center;
`;

const ShoppingCartIcon = styled.span`
  margin-right: 1rem;
  cursor: pointer;
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
`;

const Header = () => {
  return (
    <NavbarContainer>
      <Logo>
      <LogoImage src={logo} alt='Logo' />
      </Logo>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/catalogue">Catalogue</StyledLink>
        <StyledLink to="/contact">Contact Us</StyledLink>
        <StyledLink to="/help">Help</StyledLink>
      </Nav>
      <Actions>
        <ShoppingCartIcon><img src={cart} alt='' style={{width:39, height:35}}/></ShoppingCartIcon>
        <RegisterButton>Register</RegisterButton>
      </Actions>
    </NavbarContainer>
  );
};

export default Header;
