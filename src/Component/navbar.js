import React, { useEffect, useState } from 'react';
import '../Css/navbar.css'; // Import your CSS file for styling
import {Link} from "react-router-dom";

const GreenCartNavigationBar = () => {
  const [showPopover, setShowPopover] = useState(true);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const closePopover = () => {
    setDontShowAgain(true);
    setShowPopover(false);
  }; 
  useEffect(() => {
    const item = document.getElementById('itemToTrack');

    const handleScroll = () => {
      const itemRect = item.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (itemRect.top < windowHeight && itemRect.bottom > 70) {
        setShowPopover(true);
      } else {
        setShowPopover(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="green-cart-nav">
      <div className="green-cart-nav-section">
        <ul className="green-cart-nav-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Deals</a>
          </li>
          <li>
            <a href="#">Reorder</a>
          </li>
          <li>
            <a href="#">Electronics</a>
          </li>
          <li>
            <a href="#">Green Pay</a>
          </li>
          <li>
            <a href="#">Kitchen</a>
          </li>
          <li>
            <a href="#">Sell</a>
          </li>
          <li>
            <a href="#">Gift Cards</a>
          </li>
          <li>
            <a href="#">Health & Personal Care</a>
          </li>

          <div className="popover_trigger_nav">
            <Link style={{ textDecoration: "none" }} to="/green">
              <button id="itemToTrack" className="button">
                Greenovation Zone
              </button>
            </Link>
            {showPopover && !dontShowAgain && (
              <div className="popover_content_nav">
                <div className="triangle"></div>
                <p>
                  Introducing our brand new section<br></br>Greenovation Zone
                </p>
                <button onClick={closePopover} className="got_it">
                  Got It
                </button>
              </div>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default GreenCartNavigationBar;