import React from 'react';
import logo from '../Assets/header_logo.png';

const Header = () => {
  return (
    <div className="header">
      <nav>
        <img src={ logo } alt='header-logo'/>
        <h2>Houser</h2>
        <h2>Dashboard</h2>
        <p>Logout</p>
      </nav>
    </div>
  )
}

export default Header
