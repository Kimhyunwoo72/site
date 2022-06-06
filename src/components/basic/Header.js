import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../../assets/scss/header.scss";
import "../../assets/scss/reset.scss";

function Header() {
  return (
    <>
      <header id="header">
        <div className="logo">OnAndYou</div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/inside">inside</Link>
            </li>
            <li>
              <Link to="/shops">shops</Link>
            </li>
            <li>
              <Link to="/news">news</Link>
            </li>
            <li>
              <Link to="contact">contact</Link>
            </li>
          </ul>
        </nav>
        <div className="menu">
          <img src="img/menu.svg" alt="메뉴" />
        </div>
      </header>
    </>
  );
}

export default Header;
