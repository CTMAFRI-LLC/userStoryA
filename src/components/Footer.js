import React from "react";
import Volume from "./img/Volume.svg";

const Footer = () => {
  return(
    <footer>
  <div class="footer-link">
    <ul>
      <li><a href="#">SUPPORT</a></li>
      <li><a href="#">ABOUT</a></li>
      <li><a href="#">CREDITS</a></li>
    </ul>
    <img src={Volume} className="bottom-img" alt="svg-image"/>
  </div>
</footer>
  );
}


export default Footer;