import React from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";

// Styled Components for JoinAsALawyer Section
const JoinSection = styled.section`
  background-color: #031b39; 
  color: white;
  padding: 4rem 2rem;

  .join-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }
  }

  .left-content {
    flex: 1;
    display: flex;
    justify-content: center;

    img {
      max-width: 100%;
      border-radius: 12px;
      object-fit: cover;
    }

    @media (max-width: 768px) {
      img {
        width: 80%;
      }
    }
  }

  .right-content {
    flex: 1;
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 2.25rem;
      font-weight: bold;
      margin-bottom: 1.5rem;
      color: #ffffff;
    }

    p {
      font-size: 1rem;
      color: #d1d5db; /* Light gray text */
      margin-bottom: 1.5rem;
      line-height: 1.8;

      &:first-of-type {
        font-weight: bold;
        text-transform: uppercase;
        color: #fbbf24; /* Golden color for heading */
      }
    }

    .features {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin-bottom: 2rem;

      .feature {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1rem;

        svg {
          color: #22c55e; /* Green check icon */
          font-size: 1.2rem;
        }
      }

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        text-align: left;
      }
    }

    .join-button {
      background-color: #fbbf24; /* Golden button */
      color: #031b39;
      font-size: 1.1rem;
      font-weight: bold;
      padding: 0.8rem 2.5rem;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #f59e0b; /* Darker golden on hover */
      }
    }
  }
`;

const JoinAsALawyer: React.FC = () => {
  return (
    <JoinSection>
      <div className="join-container">
        {/* Left Content - Background image */}
        <div className="left-content">
          <img src="https://i.ibb.co/2tN6fs9/Screenshot-2024-11-24-152501.png" alt="Naseh Background" />
        </div>

        {/* Right Content - Text and Features */}
        <div className="right-content">
          <p>Join As A Lawyer</p>
          <h2>Join as a Lawyer on Naseh</h2>
          <p>
            Are you a licensed lawyer looking to expand your legal services? Join Naseh, Qatar’s
            first legal platform, and start providing legal consultations to clients across the
            country with ease and convenience.
          </p>
          <div className="features">
            <div className="feature">
              <FaCheckCircle />
              Expand your customer network
            </div>
            <div className="feature">
              <FaCheckCircle />
              Flexible consultation options
            </div>
            <div className="feature">
              <FaCheckCircle />
              Control your schedule
            </div>
            <div className="feature">
              <FaCheckCircle />
              Secure and fast payments
            </div>
          </div>
          <button className="join-button">Join Now</button>
        </div>
      </div>
    </JoinSection>
  );
};

export default JoinAsALawyer;
