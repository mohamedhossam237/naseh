import React from "react";
import styled from "styled-components";

// Styled Components for Urgent Consultation Bar
const BarWrapper = styled.div`
  position: absolute;
  top: 100px; /* Positioned slightly above the Navbar */
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 1rem 2rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 0.75rem;
  z-index: 60;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    top: 10px;
  }
`;

const LawyerStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .lawyer-avatars {
    display: flex;

    img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      border: 2px solid white;
      margin-left: -10px; /* Overlapping effect */
    }
  }

  span {
    color: #16a34a;
    font-weight: bold;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const UrgentText = styled.div`
  text-align: center;
  flex: 1;

  p {
    margin: 0;
    color: #374151;
    font-size: 1.1rem;

    strong {
      color: #dc2626;
      font-weight: bold;
    }
  }

  span {
    color: #6b7280;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    text-align: center;
    order: 2; /* Ensure text comes below the avatars on mobile */
  }
`;

const ConsultButton = styled.button`
  background-color: #dc2626;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 1rem;
  transition: background-color 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #b91c1c;
  }

  @media (max-width: 768px) {
    order: 3; /* Place the button last on mobile */
    width: 100%; /* Full-width button for better accessibility */
  }
`;

// Urgent Consultation Bar Component
const UrgentConsultationBar: React.FC = () => {
  return (
    <BarWrapper>
      {/* Lawyer Status */}
      <LawyerStatus>
        <div className="lawyer-avatars">
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
            alt="Lawyer 1"
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
            alt="Lawyer 2"
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
            alt="Lawyer 3"
          />
        </div>
        <span>+50 Lawyers Online</span>
      </LawyerStatus>

      {/* Urgent Text */}
      <UrgentText>
        <p>
          <strong>Urgent consultation now!</strong>
        </p>
        <span>
          Book in 5 minutes; a lawyer will respond to you in a few minutes.
        </span>
      </UrgentText>

      {/* Consult Now Button */}
      <ConsultButton>CONSULT NOW</ConsultButton>
    </BarWrapper>
  );
};

export default UrgentConsultationBar;
