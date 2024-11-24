import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { FaGlobe, FaClock } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  .slick-slider {
    max-width: 1200px;
    margin: 0 auto;

    .slick-arrow {
      background-color: #1e3a8a;
      color: white;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex !important;
      justify-content: center;
      align-items: center;
      z-index: 100;

      &:hover {
        background-color: #163e73;
      }
    }

    .slick-prev {
      left: -50px;
    }

    .slick-next {
      right: -50px;
    }

    .slick-dots {
      bottom: -30px;

      li button:before {
        font-size: 12px;
        color: #1e3a8a;
      }
    }
  }

  .community-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 2rem;
    overflow: hidden;
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-5px); /* Slight lift on hover */
    }

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
      description:
        "I Provide Specialized Legal Consultations In The Field Of Companies.",
      logo: "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
      language: "Arabic & English",
      experience: "10-15",
    },
    {
      name: "Saleh For Law",
      description:
        "I Provide Specialized Legal Consultations In The Field Of Companies.",
      logo: "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
      language: "Arabic & English",
      experience: "10-15",
    },
    {
      name: "Al Ansari Law Firm",
      description:
        "I Provide Specialized Legal Consultations In The Field Of Companies.",
      logo: "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
      language: "Arabic & English",
      experience: "10-15",
    },
    {
      name: "Dunne Law PLLC",
      description:
        "I Provide Specialized Legal Consultations In The Field Of Companies.",
      logo: "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
      language: "Arabic & English",
      experience: "10-15",
    },
    {
      name: "Dunne Law Partners",
      description:
        "I Provide Specialized Legal Consultations In The Field Of Companies.",
      logo: "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
      language: "Arabic & English",
      experience: "10-15",
    },
  ];

  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <CommunitySection id="naseh-community">
      <div className="section-header">
        <p>Lawfirm</p>
        <h2>Specialized lawyers around the clock</h2>
      </div>
      <Slider {...settings}>
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
      </Slider>
    </CommunitySection>
  );
};

export default NasehCommunity;
