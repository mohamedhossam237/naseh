import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";

// Styled Components for FAQ Section
const FAQSection = styled.section`
  background-color: #f9fafb; /* Light gray background */
  padding: 4rem 1rem;

  .faq-header {
    text-align: center;
    margin-bottom: 2rem;

    h2 {
      font-size: 2rem;
      font-weight: bold;
      color: #1e3a8a;
    }

    p {
      font-size: 0.9rem;
      color: #d97706; /* Golden color */
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
  }

  .faq-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .faq-item {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #f3f4f6;
    }

    .question {
      font-size: 1rem;
      font-weight: bold;
      color: #374151;
    }

    .icon {
      font-size: 1rem;
      color: #d97706; /* Golden color for the chevron */
      transition: transform 0.3s;

      &.expanded {
        transform: rotate(180deg);
      }
    }
  }

  .faq-answer {
    background-color: #f3f4f6; /* Light gray */
    padding: 1rem;
    border-radius: 8px;
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: #6b7280;
    line-height: 1.6;
    display: none;

    &.show {
      display: block;
    }
  }
`;

const FrequentlyAskedQuestions: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const questions = [
    "What services does Naseh offer?",
    "How can I find a lawyer using Naseh?",
    "Is there a fee to use Naseh?",
    "How can I schedule a consultation with a lawyer?",
    "Can I track the progress of my legal case through Naseh?",
    "Is Naseh available 24/7?",
    "What types of legal issues can Naseh help with?",
    "How secure is my information on Naseh?",
    "Can I upload and manage legal documents on Naseh?",
    "How do I contact customer support if I have issues with the app?",
  ];

  const answers = [
    "Naseh offers a variety of legal services, including consultations, case tracking, and document management.",
    "You can find a lawyer by searching our platform for licensed professionals specialized in various fields.",
    "Naseh is free to browse. However, consultations may involve a fee based on the lawyer's terms.",
    "Scheduling is easy through the app. Select a lawyer, pick a time, and confirm your appointment.",
    "Yes, you can track the progress of your legal case in real time through Naseh.",
    "Yes, Naseh is available 24/7 for booking consultations and managing cases.",
    "Naseh helps with corporate, family, criminal, and many other legal issues.",
    "Your information is protected using advanced encryption and security protocols.",
    "Yes, Naseh allows you to securely upload and manage your legal documents.",
    "You can contact customer support through the app's help section or via email.",
  ];

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <FAQSection>
      <div className="faq-header">
        <p>FAQ</p>
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="faq-grid">
        {questions.map((question, index) => (
          <div key={index}>
            <div
              className="faq-item"
              onClick={() => toggleExpand(index)}
            >
              <span className="question">{question}</span>
              <FaChevronDown
                className={`icon ${expanded === index ? "expanded" : ""}`}
              />
            </div>
            <div
              className={`faq-answer ${expanded === index ? "show" : ""}`}
            >
              {answers[index]}
            </div>
          </div>
        ))}
      </div>
    </FAQSection>
  );
};

export default FrequentlyAskedQuestions;
