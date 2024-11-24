import React from "react";
import styled from "styled-components";
import { FaCalendarCheck, FaPhoneAlt, FaFileContract, FaUserTie, FaFileAlt, FaBuilding } from "react-icons/fa";

// Styled Components for the Services Section
const ServicesSection = styled.section`
  background-color: white; /* White background */
  padding: 4rem 1rem;

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 2rem;

    h2 {
      font-size: 2rem;
      font-weight: bold;
      color: #1e3a8a;
    }

    a {
      color: #d97706; /* Golden color for link */
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: #b45309; /* Darker golden on hover */
      }

      svg {
        font-size: 1.2rem;
      }
    }
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }

  .service-card {
    background-color: #f9fafb;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    text-align: center;

    .icon {
      font-size: 2rem;
      color: #1e3a8a;
      margin-bottom: 1rem;
    }

    h3 {
      font-size: 1.2rem;
      font-weight: bold;
      color: #374151;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.95rem;
      color: #6b7280;
      margin-bottom: 1.5rem;
    }

    button {
      background-color: #1e3a8a;
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 9999px;
      font-weight: 600;
      font-size: 0.9rem;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #163e73;
      }

      &.disabled {
        background-color: #e5e7eb; /* Light gray for disabled state */
        color: #9ca3af;
        cursor: not-allowed;
      }
    }
  }
`;

const Services: React.FC = () => {
  return (
    <ServicesSection>
      {/* Header */}
      <div className="section-header">
        <h2>Naseh Services</h2>
        <a href="#view-all">
          View All Services <FaCalendarCheck />
        </a>
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        <div className="service-card">
          <FaCalendarCheck className="icon" />
          <h3>Scheduled Consultations</h3>
          <p>
            Naseh Application Is An Integrated Solution For Providing Legal
            Services Remotely, Through...
          </p>
          <button>Book a consultation</button>
        </div>
        <div className="service-card">
          <FaPhoneAlt className="icon" />
          <h3>Urgent Consultation</h3>
          <p>
            Naseh Application Is An Integrated Solution For Providing Legal
            Services Remotely, Through...
          </p>
          <button>Consult Now</button>
        </div>
        <div className="service-card">
          <FaBuilding className="icon" />
          <h3>Corporate Portal</h3>
          <p>
            The Corporate Portal Service Or An Open Monthly Subscription Can Be
            Offered With The...
          </p>
          <button className="disabled">Soon</button>
        </div>
        <div className="service-card">
          <FaFileAlt className="icon" />
          <h3>Written Consultation</h3>
          <p>
            Naseh Application Is An Integrated Solution For Providing Legal
            Services Remotely, Through...
          </p>
          <button className="disabled">Soon</button>
        </div>
        <div className="service-card">
          <FaFileContract className="icon" />
          <h3>Contracts & Agreements</h3>
          <p>
            Naseh Application Is An Integrated Solution For Providing Legal
            Services Remotely, Through...
          </p>
          <button className="disabled">Soon</button>
        </div>
        <div className="service-card">
          <FaUserTie className="icon" />
          <h3>Hire A Lawyer</h3>
          <p>
            Naseh Application Is An Integrated Solution For Providing Legal
            Services Remotely, Through...
          </p>
          <button className="disabled">Soon</button>
        </div>
      </div>
    </ServicesSection>
  );
};

export default Services;
