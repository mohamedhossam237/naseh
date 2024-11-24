import React from "react";
import styled from "styled-components";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";
import { FiTwitter, FiLinkedin, FiInstagram, FiYoutube } from "react-icons/fi";

const FooterWrapper = styled.footer`
  background-color: #f9fafb;
  padding: 4rem 1rem;

  .newsletter {
    text-align: center;
    margin-bottom: 3rem;

    h3 {
      font-size: 1.5rem;
      font-weight: bold;
      color: #374151;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1rem;
      color: #6b7280;
      margin-bottom: 1.5rem;
    }

    .email-input {
      display: flex;
      justify-content: center;
      gap: 0.5rem;

      input {
        padding: 0.75rem 1rem;
        border-radius: 8px;
        border: 1px solid #d1d5db;
        width: 300px;
        font-size: 1rem;
        outline: none;
      }

      button {
        background-color: #1e3a8a;
        color: white;
        padding: 0.75rem 2rem;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: bold;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
          background-color: #163e73;
        }
      }
    }
  }

  .contact-row {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
      gap: 1rem;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 1rem;
      color: #374151;

      svg {
        font-size: 1.5rem;
        color: #d97706;
      }

      span {
        font-weight: 600;
        color: #1e3a8a;
      }
    }
  }

  .footer-columns {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
    }

    .logo-section {
      flex: 1;
      text-align: left;

      @media (max-width: 768px) {
        text-align: center;
      }

      img {
        width: 150px;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1rem;
        color: #374151;
        margin-bottom: 1rem;
      }

      .social-icons {
        display: flex;
        gap: 1rem;

        a {
          color: #6b7280;
          font-size: 1.5rem;
          transition: color 0.3s;

          &:hover {
            color: #1e3a8a;
          }
        }
      }
    }

    .links-section {
      flex: 2;
      display: flex;
      justify-content: space-between;

      @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
      }

      .footer-column {
        h4 {
          font-size: 1.25rem;
          font-weight: bold;
          color: #374151;
          margin-bottom: 1rem;
        }

        ul {
          list-style: none;
          padding: 0;

          li {
            font-size: 1rem;
            color: #6b7280;
            margin-bottom: 0.5rem;

            a {
              text-decoration: none;
              color: inherit;
              transition: color 0.3s;

              &:hover {
                color: #1e3a8a;
              }
            }
          }
        }
      }
    }
  }

  .footer-bottom {
    text-align: center;
    border-top: 1px solid #e5e7eb;
    padding-top: 1rem;

    p {
      font-size: 0.875rem;
      color: #6b7280;
      margin-bottom: 0.5rem;
    }

    .payment-methods {
      display: flex;
      justify-content: center;
      gap: 1rem;

      img {
        height: 24px;
      }
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      {/* Newsletter Section */}
      <div className="newsletter">
        <h3>Newsletter</h3>
        <p>
          Stay up to date with the latest legal developments and practical advice from Qatar’s
          leading lawyers by subscribing to the Naseh newsletter.
        </p>
        <div className="email-input">
          <input type="email" placeholder="Enter your email" />
          <button>Submit</button>
        </div>
      </div>

      {/* Contact Row */}
      <div className="contact-row">
        <div className="contact-item">
          <FaEnvelope />
          <span>info@naseh.qa</span>
        </div>
        <div className="contact-item">
          <FaPhoneAlt />
          <span>+974 6699 9314</span>
        </div>
        <div className="contact-item">
          <FaBuilding />
          <span>196164</span>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt />
          <span>Al Dafna, Al Nasr Tower B, Fifth Floor</span>
        </div>
      </div>

      {/* Footer Columns */}
      <div className="footer-columns">
        {/* Logo Section */}
        <div className="logo-section">
          <img src="https://naseh.qa/assets/naseh-logo.CpTfn_N7.svg" alt="Naseh Logo" />
          <p>
            In Qatar, as in any country, it is important for its citizens and expatriates to follow
            the local laws and regulations to avoid legal problems.
          </p>
          <div className="social-icons">
            <a href="#twitter"><FiTwitter /></a>
            <a href="#linkedin"><FiLinkedin /></a>
            <a href="#instagram"><FiInstagram /></a>
            <a href="#youtube"><FiYoutube /></a>
          </div>
        </div>

        {/* Links Section */}
        <div className="links-section">
          <div className="footer-column">
            <h4>About</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#lawyers">Lawyers</a></li>
              <li><a href="#services">Naseh Services</a></li>
              <li><a href="#community">Naseh Community</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#chat">Online Chat</a></li>
              <li><a href="#whatsapp">WhatsApp</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Legal Links</h4>
            <ul>
              <li><a href="#privacy-policy">Privacy Policy</a></li>
              <li><a href="#terms">Terms and Conditions</a></li>
              <li><a href="#cookie-policy">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>All Rights Reserved @ Naseh 2022</p>
        <div className="payment-methods">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/1200px-Google_Pay_Logo.svg.png" alt="Google Pay" />
          <img src="https://developer.apple.com/news/images/og/apple-pay-og-twitter.jpg" alt="Apple Pay" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1200px-Visa_2021.svg.png" alt="Visa" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/800px-Mastercard_2019_logo.svg.png" alt="MasterCard" />
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
