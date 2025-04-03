import React from "react";

const Header: React.FC = () => {
  const navLinks = [
    "Home",
    "Bikes",
    "Gear",
    "Parts",
    "Tires",
    "Service Info",
    "Catalogues",
    "Contact",
  ];

  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo">
        <img src="/img/logo.png" alt="Bike Store Logo" />
      </div>

      {/* Navigation Section */}
      <nav className="navbar">
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Icons Section */}
      <div className="icons">
        <i className="fas fa-search icon"></i>
        <i className="fas fa-shopping-bag icon"></i>
      </div>
    </header>
  );
};

export default Header;
