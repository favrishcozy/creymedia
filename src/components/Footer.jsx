// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #1a1a1aff;
  color: #fff;
  padding: 4rem 5% 2rem;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin-bottom: 2rem;
  
  h3 {
    margin-bottom: 1rem;
    color: #00e1ffff;
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 0.5rem;
      
      a {
        color: #ccc;
        text-decoration: none;
        transition: color 0.3s;
        
        &:hover {
          color: #00e1ffff;
        }
      }
    }
  }
`;

const SubscribeSection = styled.div`
  flex: 1.5;
  min-width: 300px;
  
  h3 {
    margin-bottom: 1rem;
    color: #00e1ffff;
  }
  
  p {
    margin-bottom: 1.5rem;
    color: #ccc;
  }
  
  form {
    display: flex;
    
    input {
      flex: 1;
      padding: 0.8rem;
      border: none;
      border-radius: 4px 0 0 4px;
    }
    
    button {
      padding: 0.8rem 1.5rem;
      background-color: #00e1ffff;
      color: white;
      border: none;
      border-radius: 0 4px 4px 0;
      cursor: pointer;
      font-weight: 500;
      transition: background-color 0.3s;
      
      &:hover {
        background-color: #00e1ffff;
      }
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  
  a {
    color: #ccc;
    font-size: 1.5rem;
    transition: color 0.3s;
    
    &:hover {
      color: #00e1ffff;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #333;
  color: #888;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <SubscribeSection>
          <h3>Subscribe to our newsletter</h3>
          <p>Get the latest news and updates from Crey Dream House</p>
          <form>
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
          <SocialIcons>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </SocialIcons>
        </SubscribeSection>
        
        <FooterSection>
          <h3>Explore</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Live Sessions</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Books</a></li>
          </ul>
        </FooterSection>
        
        <FooterSection>
          <h3>Portfolio</h3>
          <ul>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Videos</a></li>
            <li><a href="#">Podcasts</a></li>
            <li><a href="#">Articles</a></li>
          </ul>
        </FooterSection>
        
        <FooterSection>
          <h3>Contact</h3>
          <ul>
            <li>+234 8123 456 789</li>
            <li>info@creydreamhouse.com</li>
            <li>Lagos, Nigeria</li>
          </ul>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        © 2023 Crey Dream House. All Rights Reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;