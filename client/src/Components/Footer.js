import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-wrapper">
                <div className="footer-text-wrapper">
                    <h1 className="footer-text-header">Tech Cloud</h1>
                    <p className="footer-para">© 2021 Tech Cloud. All rights reserved.</p>
                </div>
            </div>
            <div className="footer-links-wrapper">
                <div className="footer-links">
                    <h1 className="footer-links-header">Quick Links</h1>
                    <a href="#hero">Home</a>
                    <a href="#aboutus">About Us</a>
                    <a href="#services">Services</a>
                    <a href="#contactus">Contact Us</a>
                </div>
            </div>
            <div className="footer-links">
                <h1 className="footer-links-header">Contact</h1>
                <p> 123, XYZ Street, ABC City, 123456</p>
                <p> +91 1234567890</p>
            </div>
        </div>
        // </div>
        // </div>
    );
}
