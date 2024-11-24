import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 1rem;
  }
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  align-items: center;
  gap: 0.5rem;

  img {
    height: 2.5rem;
  }

  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: #1e3a8a;
    text-align: center; /* Center align the text */
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    text-decoration: none;
    color: #374151;
    font-weight: 500;
    font-size: 1rem;

    &:hover {
      color: #1e3a8a;
    }
  }

  @media (max-width: 768px) {
    display: none; /* Hide links on smaller screens */
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;

  button {
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
    border: none;

    &:first-child {
      background-color: #fef3c7;
      color: #d97706;

      &:hover {
        background-color: #fde68a;
      }
    }

    &:last-child {
      background-color: #f3f4f6;
      color: #374151;

      &:hover {
        background-color: #e5e7eb;
      }
    }
  }

  @media (max-width: 768px) {
    flex: 1;
    justify-content: flex-end;
  }
`;

const MenuToggle = styled.div`
  display: none;
  font-size: 1.5rem;
  color: #374151;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;

  a {
    text-decoration: none;
    color: #374151;
    font-weight: 500;
    font-size: 1rem;
    text-align: center;

    &:hover {
      color: #1e3a8a;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    background-color: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 1rem;
  }
`;

// Navbar Component
const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavbarWrapper>
      {/* Logo Section */}
      <Logo>
        <img
          src="https://naseh.qa/assets/naseh-logo.CpTfn_N7.svg"
          alt="Naseh Logo"
        />
        <span>Naseh</span>
      </Logo>

      {/* Hamburger Menu for Mobile */}
      <MenuToggle onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? "✖" : "☰"} {/* Toggle between close and menu icon */}
      </MenuToggle>

      {/* Links for Desktop */}
      <NavLinks>
        <a href="#home">Home</a>
        <a href="#lawfirm">Lawfirm</a>
        <a href="#services">Naseh Services</a>
        <a href="#community">Naseh Community</a>
        <a href="#contact">Contact Us</a>
      </NavLinks>

      {/* Action Buttons */}
      <Actions>
        <button>Book a Consultation</button>
        <button>AR</button>
      </Actions>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <MobileMenu>
          <a href="#home">Home</a>
          <a href="#lawfirm">Lawfirm</a>
          <a href="#services">Naseh Services</a>
          <a href="#community">Naseh Community</a>
          <a href="#contact">Contact Us</a>
        </MobileMenu>
      )}
    </NavbarWrapper>
  );
};

export default Navbar;
