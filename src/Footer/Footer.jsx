import React from 'react';
import styled from 'styled-components';
import { ReactComponent as FacebookIcon } from '../icons/facebook.svg'; // يجب استيراد الأيقونات الخاصة بك
import { ReactComponent as TwitterIcon } from '../icons/twiter.svg';
import { ReactComponent as InstagramIcon } from '../icons/instagram.svg';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #f5f5f5; // استخدم اللون الخاص بتصميمك
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h4`
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: #333; // استخدم اللون الخاص بتصميمك
  text-decoration: none;
  margin-bottom: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.a`
  margin: 0 5px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <Title>IPSUM CAR COMPANY</Title>
        {/* يمكنك إضافة أي عناصر إضافية هنا */}
      </FooterSection>
      <FooterSection>
        <Title>Menu</Title>
        <Link href="/">Home</Link>
        <Link href="/car-catalogue">Car Catalogue</Link>
        <Link href="/services">Services</Link>
      </FooterSection>
      <FooterSection>
        <Title>Further Information</Title>
        <Link href="/terms">Terms & Conditions</Link>
        <Link href="/privacy">Privacy Policy</Link>
      </FooterSection>
      <FooterSection>
        <Title>Contact us</Title>
        <p>647P+4G5, Seif Al-Doleh, Aleppo, Syria</p>
        <p>+96323456</p>
        <Link href="mailto:tagred@gmail.com">tagred@gmail.com</Link>
      </FooterSection>
      <FooterSection>
        <Title>Follow us</Title>
        <SocialMediaIcons>
          <Icon href="https://facebook.com"><FacebookIcon /></Icon>
          <Icon href="https://twitter.com"><TwitterIcon /></Icon>
          <Icon href="https://instagram.com"><InstagramIcon /></Icon>
        </SocialMediaIcons>
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;
