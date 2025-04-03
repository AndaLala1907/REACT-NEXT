import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <>
    <nav className="navbar">
      <Link to="/" className="navbar-link">
        MUSIC DB
      </Link>
    </nav>

    <footer className="navbar-footer">
      <h1 className="footer-title">Browse the artist</h1>
    </footer>
  </>
);

export default Navbar;
