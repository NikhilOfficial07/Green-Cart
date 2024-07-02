import React from "react";
import "../Css/Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer__backToTop" onClick={scrollToTop}>
        Back to Top
      </div>
      <div className="footer__linkContainer">
        <div className="footer__column">
          <h3 className="footer__title">About GreenCart</h3>
          <ul className="footer__list">
            <li className="footer__listItem">Our Mission</li>
            <li className="footer__listItem">Eco-Friendly Practices</li>
            <li className="footer__listItem">Community Involvement</li>
            <li className="footer__listItem">Sustainability Goals</li>
          </ul>
        </div>
        <div className="footer__column">
          <h3 className="footer__title">Customer Care</h3>
          <ul className="footer__list">
            <li className="footer__listItem">Support Center</li>
            <li className="footer__listItem">How to Shop</li>
            <li className="footer__listItem">Order Status</li>
            <li className="footer__listItem">Shipping Information</li>
          </ul>
        </div>
        <div className="footer__column">
          <h3 className="footer__title">Services</h3>
          <ul className="footer__list">
            <li className="footer__listItem">GreenCart Membership</li>
            <li className="footer__listItem">Affiliate Program</li>
            <li className="footer__listItem">Vendor Partnership</li>
            <li className="footer__listItem">Gift Cards</li>
          </ul>
        </div>
        <div className="footer__column">
          <h3 className="footer__title">Connect with Us</h3>
          <ul className="footer__list">
            <li className="footer__listItem">Facebook</li>
            <li className="footer__listItem">Twitter</li>
            <li className="footer__listItem">Instagram</li>
            <li className="footer__listItem">LinkedIn</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
