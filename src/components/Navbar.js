import React from "react";
import Logo from "./img/LogoP.svg";

const Navbar = () => {
  return(
    <nav className="navbar">
      <img src={Logo} alt="logo"/>
      <button className="link-btn"><a href="/signin">SIGN IN</a></button>
    </nav>
  );
}


export default Navbar;