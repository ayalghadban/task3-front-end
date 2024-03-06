import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';

const NavbarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const Logo = styled.h1`
  font-size: 2rem;
  color: #cc7a00;
`;

const Nav = styled.nav`
  display: flex;
`;

const StyledLink = styled(Link)`
  margin: 0 1rem;
  text-decoration: none;
  color: #333;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
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

const RegisterButton = styled.button`
  background-color: transparent;
  border: 1px solid #cc7a00;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  color: #cc7a00;
  font-weight: bold;

  &:hover {
    background-color: #cc7a00;
    color: white;
  }
`;

const Header = () => {
  return (
    <NavbarContainer>
      <Logo>IPSUM</Logo>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/catalogue">Catalogue</StyledLink>
        <StyledLink to="/contact">Contact Us</StyledLink>
        <StyledLink to="/help">Help</StyledLink>
      </Nav>
      <Actions>
        <ShoppingCartIcon><a href={Cart}>🛒</a></ShoppingCartIcon>
        <RegisterButton>Register</RegisterButton>
      </Actions>
    </NavbarContainer>
  );
};

export default Header;
