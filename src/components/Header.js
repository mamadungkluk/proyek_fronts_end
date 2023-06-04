import React from 'react';
import './Header.css'; // Import file CSS
import logo from '../image/toko1.png'; // Import file gambar logo

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kedai Cumik Logo" className="header__logo" />
      <h1 className="header__title">vape shop</h1>
    </header>
  );
}

export default Header;
