import React from 'react';
import '../Css/navbargreen.css';
import { Link } from 'react-router-dom';
//import Popover from './Popover';

const GreenNavigationBar= () => {
  return (
    <div className="green-cart-nav">
      <div className="green-cart-nav-section">
        <ul className="green-cart-nav-list">
          <Link style={{textDecoration: 'none'}} to = "/green">
            <li><a href="#" style={{ color: '#146eb4' }}>Home</a></li>
          </Link>
          <li><a href="#">Today's Deals</a></li>
          <li><a href="#">Green Pay</a></li>
         
          <li><a href="#">Personal Care</a></li>
          <li><a href="#">Bamboo</a></li>
          <li><a href="#">Kitchen</a></li>
          <li><a href="#">Gift cards</a></li>
          <Link style={{textDecoration: 'none'}} to = "/seller">
          <li><a href="#" style={{ color: '#146eb4' }}>Seller</a></li>
          </Link>
          <Link style={{textDecoration: 'none'}} to = "/education">
          <li><a href="#" style={{ color: '#146eb4' }}>Educational Section</a></li>
          </Link>
          <Link style={{textDecoration: 'none'}} to = "/sustainability">
          <li><a href="#" style={{ color: '#146eb4' }}>Sustainability Reports</a></li>
          </Link>
          <li><a href="#">More</a></li>

          {/* <Link style={{textDecoration: 'none'}} to = "/green">
            <button className="button">Greenovation Zone</button>
          </Link> */}
          </ul>
      </div>
    </div>
  );
};

export default GreenNavigationBar;
