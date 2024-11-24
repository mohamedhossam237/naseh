import React from "react";
import styled from "styled-components";
import { FaBalanceScale, FaRegHandshake, FaShieldAlt, FaCreditCard } from "react-icons/fa";

// Styled Components for LawFirm Section
const LawFirmSection = styled.section`
  background-color: #f9fafb; /* Light gray background */
  padding: 4rem 1rem;
  text-align: center;

  .section-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #1e3a8a;
  }

  .lawfirm-features {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  .feature-card {
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 2rem;
    max-width: 250px;
    text-align: center;

    .icon {
      font-size: 3rem;
      color: #1e3a8a; /* Icon color */
      margin-bottom: 1rem;
    }

    h3 {
      font-size: 1.25rem;
      font-weight: bold;
      color: #374151;
      margin-bottom: 0.5rem;
    }

    p {
      color: #6b7280;
      font-size: 0.95rem;
    }
  }
`;

const LawFirm: React.FC = () => {
  return (
    <LawFirmSection id="lawfirm">
      <h2 className="section-title">Why Choose Naseh Law Firm?</h2>
      <div className="lawfirm-features">
        <div className="feature-card">
          <FaBalanceScale className="icon" /> {/* Legal Services Icon */}
          <h3>Reliable Legal Services</h3>
          <p>
            Naseh platform provides legal advice approved by lawyers registered with the
            Qatari Ministry of Justice.
          </p>
        </div>
        <div className="feature-card">
          <FaRegHandshake className="icon" /> {/* Handshake Icon */}
          <h3>Diversity of Services</h3>
          <p>
            Naseh offers a wide range of legal services that meet the needs of individuals
            and companies.
          </p>
        </div>
        <div className="feature-card">
          <FaShieldAlt className="icon" /> {/* Shield Icon */}
          <h3>Security & Confidentiality</h3>
          <p>
            Naseh ensures the protection of users' data and legal information through
            advanced security systems.
          </p>
        </div>
        <div className="feature-card">
          <FaCreditCard className="icon" /> {/* Credit Card Icon */}
          <h3>Easy Electronic Payment</h3>
          <p>
            Safe and convenient payment options ensure transactions are completed easily
            and comfortably.
          </p>
        </div>
      </div>
    </LawFirmSection>
  );
};

export default LawFirm;
