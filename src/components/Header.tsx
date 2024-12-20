import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import UrgentConsultationBar from "./UrgentConsultationBar";

const HeaderWrapper = styled.header`
  position: relative;
  background-color: white; /* White top half background */
`;

const HeroSection = styled.div`
  background-color: #031b39;
  color: white;
  text-align: center;
  padding: 6rem 1rem;
  position: relative;
  z-index: 10;
  overflow: hidden;

  /* Full-size logo as a background */
  background-image: url("https://naseh.qa/assets/naseh-logo.CpTfn_N7.svg");
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
    background-size: 100%;
  }
`;

const BlueOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(3, 27, 57, 0.9); /* Semi-transparent blue overlay */
  z-index: 15; /* Place it above the logo but below the content */
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 20; /* Ensure it is above the overlay */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem; /* Add spacing between the title, text, and button */
  padding: 2rem 0; /* Add padding to the entire content area */
`;

const HeroTitle = styled.h1`
  font-size: 2.75rem;
  font-weight: bold;
  margin: 0;
  line-height: 1.25;
  padding-bottom: 1rem; /* Add padding below the title */

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroText = styled.p`
  margin-top: 0.5rem;
  font-size: 1.25rem;
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding-bottom: 1rem; /* Add padding below the text */

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroButton = styled.a`
  margin-top: 2rem;
  display: inline-block;
  background-color: white;
  color: #1e3a8a;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f3f4f6;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const FooterLogos = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  gap: 2rem;

  img {
    height: 6rem;

    @media (max-width: 768px) {
      height: 4rem;
    }
  }
`;

const UrgentBarWrapper = styled.div`
  position: absolute;
  top: -10px; /* Positioned above the Navbar */
  left: 50%;
  transform: translateX(-50%);
  z-index: 60; /* Higher than the Navbar */
  width: 90%;
  max-width: 1200px;

  @media (max-width: 768px) {
    top: 10px;
    width: 95%;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      {/* Urgent Consultation Bar */}
      <UrgentBarWrapper>
        <UrgentConsultationBar />
      </UrgentBarWrapper>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection>
        {/* Blue Overlay */}
        <BlueOverlay />
        <HeroContent>
          <HeroTitle>Naseh First Qatari Legal Platform</HeroTitle>
          <HeroText>
            Pioneering the first Qatari online legal consultation platform with
            the largest network of verified lawyers tailored to your needs.
          </HeroText>
          <HeroButton href="#read-more">Read More →</HeroButton>
        </HeroContent>
      </HeroSection>
      <FooterLogos>
          <img
            src="https://cdn.prod.website-files.com/663e1523beb298605ebc45d9/66659e7f0449ef4a4cd773d4_logo_microsoft_for_startups.png"
            alt="Microsoft for Startups"
          />
          <img
            src="https://www.mcit.gov.qa/sites/all/themes/mcit/logo.png"
            alt="Ministry of Communications"
          />
          <img
            src="https://qstp.org.qa/wp-content/uploads/2024/09/QSTP_Logo_colored-e1720330919282.png"
            alt="Qatar Science and Technology Park"
          />
        </FooterLogos>
    </HeaderWrapper>
  );
};

export default Header;
