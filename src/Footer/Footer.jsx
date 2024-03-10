import React from 'react';
import styled from 'styled-components';
import { ReactComponent as FacebookIcon } from '../icons/facebook.svg'; // تأكد من مسارات الأيقونات الخاصة بك
import { ReactComponent as TwitterIcon } from '../icons/twiter.svg';
import { ReactComponent as InstagramIcon } from '../icons/instagram.svg';

const FooterContainer = styled.footer`
  background-color: #8f8f8f; // أو أي لون تفضله
  color: #fff; // لون النص
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-size: 0.8em; // اجعل الخط أصغر بحسب التصميم
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px; // أو العرض الذي تفضله
  margin-top: 20px;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h4`
  color: #fff; // لون العنوان
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: #fff; // استخدم لون الرابط الخاص بتصميمك
  text-decoration: none;
  margin-bottom: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const IconLink = styled.a`
  margin: 0 10px;
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
          <p>647P+4G5, Seif Al-Doleh, Aleppo, Syria</p>
          <p>+96323456</p>
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
