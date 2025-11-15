// src/components/Navigation.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 5%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 0.5rem 2%;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;

  span {
    color: #ff7b00;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #00bfff;
  }

  &:visited {
    color: white;
  }
`;

const NavLink = styled.div`
  position: relative;

  ${props => props.hasDropdown && `
    &:hover .dropdown {
      display: block;
    }
  `}
`;

const Dropdown = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 150px;
  z-index: 1000;

  a {
    display: block;
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: #000;
    font-weight: 500;
    transition: background-color 0.3s;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

const NavButtons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.button`
  padding: 0.25rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s;

  ${props => props.primary && `
    background-color: #00bfff;
    color: white;

    &:hover {
      background-color: #0099cc;
    }
  `}

  ${props => props.secondary && `
    background-color: transparent;
    color: #00bfff;
    border: 1px solid #00bfff;

    &:hover {
      background-color: #00bfff;
      color: white;
    }
  `}
`;

const MobileMenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    backdrop-filter: blur(10px);

    ${props => props.isOpen ? `
      display: flex;
    ` : `
      display: none;
    `}
  }
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const MobileStyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 500;
  padding: 0.5rem 1rem;
  text-align: center;

  &:hover {
    color: #00bfff;
  }
`;

const MobileButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const MobileButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;

  ${props => props.primary && `
    background-color: #00bfff;
    color: white;
    border: none;

    &:hover {
      background-color: #0099cc;
    }
  `}

  ${props => props.secondary && `
    background-color: transparent;
    color: #00bfff;
    border: 1px solid #00bfff;

    &:hover {
      background-color: #00bfff;
      color: white;
    }
  `}
`;

const Navigation = ({ blackBg }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Nav blackBg={blackBg}>
      <Logo>CREY <span>DREAM</span> HOUSE</Logo>
      <NavLinks>
        <StyledLink to="/">Home</StyledLink>
        <NavLink hasDropdown>
          <StyledLink as="a">News</StyledLink>
          <Dropdown className="dropdown">
            <Link to="/blog">Blog</Link>
            <Link to="/news">Articles</Link>
          </Dropdown>
        </NavLink>
        <NavLink hasDropdown>
          <StyledLink as="a">Live</StyledLink>
          <Dropdown className="dropdown">
            <Link to="/live">Videos</Link>
          </Dropdown>
        </NavLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </NavLinks>
      <NavButtons>
        <Button as={Link} to="/livestream-guide" primary>Guide</Button>
        <Button as={Link} to="/admin" secondary>Admin</Button>
      </NavButtons>
      <MobileMenuToggle onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </MobileMenuToggle>
      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileNavLinks>
          <MobileStyledLink to="/" onClick={toggleMobileMenu}>Home</MobileStyledLink>
          <MobileStyledLink to="/news" onClick={toggleMobileMenu}>News</MobileStyledLink>
          <MobileStyledLink to="/live" onClick={toggleMobileMenu}>Live</MobileStyledLink>
          <MobileStyledLink to="/about" onClick={toggleMobileMenu}>About</MobileStyledLink>
          <MobileStyledLink to="/contact" onClick={toggleMobileMenu}>Contact</MobileStyledLink>
        </MobileNavLinks>
      </MobileMenu>
    </Nav>
  );
};

export default Navigation;
