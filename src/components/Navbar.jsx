import React, { useState } from "react";
import "../components/Navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaGrinHearts,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";
import Serviecs from "./Services";
import Footer from "./Footer";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>S</span>crapa
            <span>W</span>holesaller
          </h2>
        </div>

        {/* 2nd menu part  */}
        {/* <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/service">services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </div> */}

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="H"
                target="abhi"
              >
                {/* <i class="bi bi-globe"></i>         */}
                <div style={{ "display": "flex" }} className="globIcon">
                  <svg style={{ "margin": "8px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                  </svg>
                  <span className="globeText" style={{ 'fontSize': '14px', 'margin': '6px' }} > ENG/MAR</span>
                </div>
              </a>
            </li>
            {/* <li>
              <a
                href="https://www.instagram.com"
                target="abhi"
              >
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com"
                target="abhi"
              >
                <FaYoutubeSquare className="youtube" />
              </a>
            </li> */}
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="tr" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>


      <div class='parent'>
        <div class='child'>  {/* hero section  */}
          <section className="hero-section heroLeft">
            <p> Scrap your vehicle in environment </p>
            <p>   friendly way with Scrapa. </p>
            <h6>Instant Offer | Prompt Pick-up | Hassle-free end-to-end service | Follows all legal compliances</h6>
          </section></div>
        <div class='child'>

        <div class="login-box">
  {/* <h2>Login</h2> */}
  <form>
    <div class="user-box">
      <input type="text"  />
      <label>Name</label>
    </div>
    <div class="user-box">
    <label>E-Mail</label>

      <input type="email" name="" />
    </div>
    <div class="user-box">
    <label> Items You Like To Scrap ? </label>

      <input type="text"  />
    </div>

    <div class="mb-3">
  <input class="form-control" type="file" id="formFile"/>
</div>


    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>

    <h6 className="no">Call us on 1800-267-6000</h6>
  </form>
</div>
         
        </div>
      </div>

<Serviecs/>
    </>
  );
};

export default Navbar;
