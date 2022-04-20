import React from "react";
import LogoRaroPlay from "../../assets/logo/raroplay-logo-branco.svg";
import Navigation from "../../components/Navigation";
import "./Header.css";
const Header = () => (
  <header className="header">
    <div>
      <img className="logo" src={LogoRaroPlay} />
    </div>
    <nav className="navigation">
      <Navigation />
    </nav>
  </header>
);

export default Header;
