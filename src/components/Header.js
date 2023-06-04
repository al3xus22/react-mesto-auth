import React from 'react';
import headerlogo from "../images/header__logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={headerlogo} className="header__logo" alt="Место_Россия"/>
    </header>
  );
}

export default Header;