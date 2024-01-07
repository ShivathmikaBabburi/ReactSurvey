// Import the React library
import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="container-fluid">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/surveyform">SURVEY FORM</Link></li>
          <li><Link to="/surveylists">SURVEY LISTS</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
