import React from "react";
import { useState } from "react";
import "./Header.css";
import logoImage from "../Images/logoImage.png";
const Header = () => {
    const [hamburger, setHamburger] = useState(false);
    const [clicked, setClicked] = useState(false);
    const expandHamburger = () => {
        console.log("clicked");
        setHamburger(!hamburger);
        setClicked(!clicked);
    };

    return (
        <nav className="navbar navbar-glass">
            <div className="nav-logo-wrapper">
                <img src={logoImage} alt="logo" className="nav-logo" />
                <span className="nav-logo-text">
                    <span className="fw-800">TECH</span> CLOUD
                </span>
            </div>
            <div className="nav-links-wrapper">
                <ul className="nav-links">
                    <li className="nav-links-text fw-600">
                        <a href="#hero">Home</a>
                    </li>
                    <li className="nav-links-text fw-600">
                        <a href="#aboutus">About Us</a>
                    </li>
                    <li className="nav-links-text fw-600">
                        <a href="#services">Services</a>
                    </li>
                    <li className="nav-links-text fw-600">
                        <a href="#contact-us">Contact Us</a>
                    </li>
                </ul>
                <div className={hamburger === false ? "nav-hamburger" : "nav-hamburger expand"} onClick={expandHamburger}>
                    <div className="line line1"></div>
                    <div className="line line2"></div>
                    <div className="line line3"></div>
                </div>
            </div>
            <div className={clicked ? "nav-links-hamburger active" : "nav-links-hamburger"}>
                <ul >
                    <li className="nav-links-text fw-600">
                        <a href="#hero">Home</a>
                    </li>
                    <li className="nav-links-text fw-600">
                        <a href="#aboutus">About Us</a>
                    </li>
                    <li className="nav-links-text fw-600">
                        <a href="#services">Services</a>
                    </li>
                    <li className="nav-links-text fw-600">
                        <a href="#contact-us">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
