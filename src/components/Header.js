import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
          <Link to="/main">Main</Link>
          <Link to="/sub-main1">Sub xMain 1</Link>
          <Link to="/sub-main2">Sub Main 2</Link>
    </header>
  );
}


export default Header;
