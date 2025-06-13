import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { title: "Home", url: "/" },
    { title: "About Us", url: "/about" },
    { title: "Programs", url: "/programs" },
    { title: "Campus Life", url: "/campus-life" },
    { title: "Testimonials", url: "/testimonials" },
  ];

  return (
    <footer className="footer-container" role="contentinfo">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Inspiracore Institute</h3>
          <p className="footer-description">
            Dedicated to cultivating brilliance and nurturing innovation,
            Inspiracore Institute has been a beacon of transformative education,
            groundbreaking research, and impactful community engagement since
            1995.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul className="footer-links">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} className="footer-link">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          &copy; {currentYear} Inspiracore Institute. All rights reserved.
          Empowering futures through knowledge and excellence.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
