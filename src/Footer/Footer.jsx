import React from 'react';
import styled from 'styled-components';
import { ReactComponent as FacebookIcon } from '../icons/facebook.svg'; // تأكد من مسارات الأيقونات الخاصة بك
import { ReactComponent as TwitterIcon } from '../icons/twiter.svg';
import { ReactComponent as InstagramIcon } from '../icons/instagram.svg';
import logo from '../icons/Logo.svg'
const FooterContainer = styled.footer`
  background-color: rgba(0, 0, 0, 0.10); // أو أي لون تفضله
  color: #fff; // لون النص
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-size: 0.8em; // اجعل الخط أصغر بحسب التصميم
`;

const FooterContent = styled.div`
display: flex;
flex-direction: row; // Default layout for larger screens
justify-content: space-between;
align-items: flex-start; // Align to start for row layout
width: 100%;
max-width: 1200px;
margin-top: 20px;
flex-wrap: wrap;

@media (max-width: 768px) {
  flex-direction: column; // Stack elements vertically on smaller screens
  align-items: center; // Center items when in column layout
}
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h4`
  color: #000; // لون العنوان
  margin-bottom: 10px;
  font-size: 28;
  font-family: 'Righteous';
font-weight: '400';
word-wrap: 'break-word'
`;

const Link = styled.a`
  text-decoration: none;
  margin-bottom: 5px;
  color: #808080;
font-size: 25;
font-weight: '500';
word-wrap: 'break-word';

  &:hover {
    text-decoration: underline;
  }
`;

const IconLink = styled.a`
  margin: 0 10px;
  size: 50%;

`;
const SocialMediaIcons = styled.div`
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
        <img src={logo} alt=''></img>
          <Title>IPSUM CAR COMPANY</Title>
          {/* يمكنك إضافة شعار الشركة هنا إذا أردت */}
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
          <p style={{ color:'#808080' }}>647P+4G5, Seif Al-Doleh, Aleppo, Syria</p>
          <p style={{ color:'#808080' }}>+96323456</p>
          <Link href="mailto:tagred@gmail.com">tagred@gmail.com</Link>
        </FooterSection>
        <FooterSection>
          <Title>Follow us</Title>
          <SocialMediaIcons>
            <IconLink href="https://facebook.com"><FacebookIcon /></IconLink>
            <IconLink href="https://twitter.com"><TwitterIcon /></IconLink>
            <IconLink href="https://instagram.com"><InstagramIcon /></IconLink>
          </SocialMediaIcons>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
