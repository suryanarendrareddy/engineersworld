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
              href="https://www.linkedin.com/company/engineers-world-pvt-ltd/?viewAsMember=true"
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
              href="https://www.youtube.com/@engineers_world_pvt"
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
          <p>Email:info@engineersworld.in</p>
          <p>Phone: +91 7997700218</p>
          <p>
            Office Address: Journalist colony, Nampally, Rajanna Sircilla,
            Telangana, 505302
          </p>
          <p>
            Registered address: Venkampet road, Rajanna Sircilla, Telangana,
            505301
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="policies">
          <Link to="/terms-of-service">Terms of Service</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/refund-policy">refund Policy</Link>
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