import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaYoutube, FaTelegram } from 'react-icons/fa';
import './Footer.css';
import {Link } from "react-router-dom"
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/company/engineer-s-world/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/engineer_s__world/?utm_medium=copy_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com/@engineersworld-ew?si=7cI5kwaNmVQ3m2V0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/team">Our Team</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>
            <span className="span">Email:</span>
            <a href="mailto:info@engineersworld.in">info@engineersworld.in</a>
          </p>
          <p>
            <span className="span">Phone:</span>{' '}
            <a href="tel:+917997700218">+91 7997700218</a>
          </p>
          <p>
            <span className="span">Office Address:</span> Journalist colony,
            Nampally, Rajanna Sircilla, Telangana, 505302
          </p>
          <p>
            <span className="span">Registered Address:</span> Venkampet
            road,Sircilla, Rajanna Sircilla, Telangana, 505301
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="policies">
          <Link to="/terms-of-service">Terms of Service</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/refund-policy">Refund Policy</Link>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Engineers World. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer;