import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div id="header">
        <img id="logo" src="/VentriksLogo.png" />
      </div>
      <ul>
        <li>
          <Link className="navItem" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="navItem" to="/Favourites">
            Favourites
          </Link>
        </li>
      </ul>
    </>
  );
}
