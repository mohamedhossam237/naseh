import React from "react";
import styled from "styled-components";
import { FaGlobe, FaClock } from "react-icons/fa";

// Styled Components for the Naseh Community Section
const CommunitySection = styled.section`
  background-color: #f9fafb; /* Light gray background */
  padding: 4rem 1rem;

  .section-header {
    text-align: center;
    margin-bottom: 2rem;

    h2 {
      font-size: 2rem;
      font-weight: bold;
      color: #1e3a8a;
    }

    p {
      font-size: 1rem;
      color: #d97706; /* Golden color */
      margin-top: 0.5rem;
    }
  }

  .community-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }

  .community-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 2rem;
    overflow: hidden;

    .logo {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin: 0 auto 1rem auto;
      background-color: #f3f4f6;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 50px;
        height: 50px;
        object-fit: contain;
      }
    }

    h3 {
      font-size: 1.25rem;
      font-weight: bold;
      color: #374151;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.95rem;
      color: #6b7280;
      margin-bottom: 1.5rem;
    }

    .details {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1.5rem;
      font-size: 0.9rem;
      color: #6b7280;

      .detail-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        svg {
          font-size: 1rem;
          color: #1e3a8a;
        }
      }
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
    }
  }
`;

const NasehCommunity: React.FC = () => {
  // Sample data for Naseh Community cards
  const community = [
    {
      name: "Dawi Law Firm",
      description: "I Provide Specialized Legal Consultations In The Field Of Companies.",
      logo: "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg", // Replace with actual logo paths
      language: "Arabic & English",
      experience: "10-15",
    },
    {
      name: "Saleh For Law",
      description: "I Provide Specialized Legal Consultations In The Field Of Companies.",
      logo: "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
      language: "Arabic & English",
      experience: "10-15",
    },
    {
      name: "Al Ansari Law Firm",
      description: "I Provide Specialized Legal Consultations In The Field Of Companies.",
      logo: "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
      language: "Arabic & English",
      experience: "10-15",
    },
    {
      name: "Dunne Law PLLC",
      description: "I Provide Specialized Legal Consultations In The Field Of Companies.",
      logo: "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
      language: "Arabic & English",
      experience: "10-15",
    },
    {
      name: "Dunne Law Partners",
      description: "I Provide Specialized Legal Consultations In The Field Of Companies.",
      logo: "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
      language: "Arabic & English",
      experience: "10-15",
    },
  ];

  return (
    <CommunitySection id="naseh-community">
      <div className="section-header">
        <p>Lawfirm</p>
        <h2>Specialized lawyers around the clock</h2>
      </div>
      <div className="community-grid">
        {community.map((firm, index) => (
          <div className="community-card" key={index}>
            <div className="logo">
              <img src={firm.logo} alt={firm.name} />
            </div>
            <h3>{firm.name}</h3>
            <p>{firm.description}</p>
            <div className="details">
              <div className="detail-item">
                <FaGlobe />
                <span>{firm.language}</span>
              </div>
              <div className="detail-item">
                <FaClock />
                <span>{firm.experience} Years of Experience</span>
              </div>
            </div>
            <button>View Profile</button>
          </div>
        ))}
      </div>
    </CommunitySection>
  );
};

export default NasehCommunity;
