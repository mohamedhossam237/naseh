import React from "react";
import styled from "styled-components";

const BarWrapper = styled.div`
  position: absolute;
  top: 100px;
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
  z-index: 20;
`;

const LawyerStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .lawyer-avatars {
    display: flex;
    gap: -0.25rem;

    img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      border: 2px solid white;
    }
  }

  span {
    color: #16a34a;
    font-weight: bold;
    font-size: 1rem;
  }
`;

const UrgentText = styled.div`
  text-align: center;
  flex: 1;
  margin: 0 2rem;

  p {
    margin: 0;
    color: #374151;
    font-size: 1rem;

    strong {
      color: #dc2626;
      font-weight: bold;
    }
  }

  span {
    color: #6b7280;
    font-size: 0.875rem;
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

  &:hover {
    background-color: #b91c1c;
  }
`;

const UrgentConsultationBar: React.FC = () => {
  return (
    <BarWrapper>
      <LawyerStatus>
        <div className="lawyer-avatars">
          <img src="/lawyer1.png" alt="Lawyer 1" />
          <img src="/lawyer2.png" alt="Lawyer 2" />
          <img src="/lawyer3.png" alt="Lawyer 3" />
        </div>
        <span>+50 Lawyers Online</span>
      </LawyerStatus>
      <UrgentText>
        <p>
          <strong>Urgent consultation now!</strong>
        </p>
        <span>Book in 5 minutes; a lawyer will respond to you in a few minutes.</span>
      </UrgentText>
      <ConsultButton>CONSULT NOW</ConsultButton>
    </BarWrapper>
  );
};

export default UrgentConsultationBar;
