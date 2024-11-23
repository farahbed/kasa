import React from "react"
import logo from "./LOGO.png"
import "./Header.scss"
import { Link } from "react-router-dom"


function Header() {
  return (
    <header>
        <h1><img className="logo" src={logo} alt="logo" /></h1>
     
      <nav>
        <Link className="accueilBtn" to="/">Accueil</Link>
        <Link  className="aproposBtn" to="/about">A propos</Link>

      </nav>
    </header>
  );
}

export default Header;
