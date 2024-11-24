import React from "react";
import styled from "styled-components";

const WhyNasahSection = styled.section`
  background-color: #031b39; 
  padding: 4rem 1rem;
  position: relative;

  .section-header {
    text-align: center;
    margin-bottom: 3rem;

    h2 {
      font-size: 2.5rem;
      font-weight: bold;
      color: white;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.125rem;
      color: #d1d5db; /* Light gray */
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.8;
    }
  }

  .features-grid {
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 1024px) {
      flex-wrap: wrap;
      justify-content: center;
    }

    .feature-card {
      background-color: white;
      color: #1e3a8a;
      border-radius: 16px;
      padding: 1.5rem;
      flex: 1;
      max-width: 350px;
      text-align: center;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease-in-out;

      &:hover {
        transform: translateY(-10px);
      }

      img {
        max-width: 100%;
        border-radius: 8px;
        margin-bottom: 1rem;
      }

      h3 {
        font-size: 1.25rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }

      p {
        font-size: 1rem;
        color: #374151; /* Dark gray */
        line-height: 1.6;
      }
    }
  }

  .download-buttons {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 3rem;

    a {
      display: inline-block;

      img {
        height: 50px;
        transition: transform 0.3s ease-in-out;

        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }

  .background-image {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    opacity: 0.1;
    z-index: 1;
  }
`;

const WhyNasah: React.FC = () => {
  // Feature data
  const features = [
    {
      id: 1,
      image: "https://cdn.dribbble.com/users/2191040/screenshots/6119500/page-01_4x.png",
      title: "Feature 1: Quick Access",
      description:
        "Pioneering the first Qatari online legal consultation platform with the largest network of verified lawyers tailored to your every need.",
    },
    {
      id: 2,
      image: "https://cdn.dribbble.com/users/2191040/screenshots/6119500/page-01_4x.png",
      title: "Feature 2: Easy Communication",
      description:
        "A group of lawyers registered with the Ministry of Justice. You can choose the right lawyer for you with ease.",
    },
    {
      id: 3,
      image: "https://cdn.dribbble.com/users/2191040/screenshots/6119500/page-01_4x.png",
      title: "Feature 3: Multiple Options",
      description:
        "Choose the legal consultation method that suits you: video, chat, voice, or written. We're here to help.",
    },
  ];

  return (
    <WhyNasahSection>
      {/* Background Image */}
      <img
        src="/images/background-overlay.png" // Background image (replace with your asset)
        alt="Background Overlay"
        className="background-image"
      />

      {/* Section Header */}
      <div className="section-header">
        <h2>Why Choose Naseh?</h2>
        <p>
          Naseh application is the ideal solution for your legal consultations
          in Qatar, as we provide innovative legal services to meet your needs
          in a flexible and reliable manner.
        </p>
      </div>

      {/* Features Grid */}
      <div className="features-grid">
        {features.map((feature) => (
          <div className="feature-card" key={feature.id}>
            <img src={feature.image} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Download Buttons */}
      <div className="download-buttons">
        <a href="#google-play">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png"
            alt="Download on Google Play"
          />
        </a>
        <a href="#app-store">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
            alt="Download on App Store"
          />
        </a>
      </div>
    </WhyNasahSection>
  );
};

export default WhyNasah;
