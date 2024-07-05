import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>로고</h1>    
          <Link to="/main">Main</Link>
          <Link to="/sub-main1">Sub xMain 1</Link>
          <Link to="/sub-main2">Sub Main 2</Link>
    </header>
  );
}

export default Header;
