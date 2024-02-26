import React from "react";
import { useRef, useEffect } from "react";
import "./Services.css";
import WebDImage from "../Images/webD-removebg-preview.png";
import CloudCImage from "../Images/CC-removebg-preview.png";
import DesignImage from "../Images/Design-removebg-preview.png";

export default function Services() {
    const textRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null, // viewport
            rootMargin: "0px",
            threshold: 0.5, // 0 (not visible) to 1 (fully visible)
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Do something when the element enters the viewport
                    console.log("Element is visible");
                    // For example, add a CSS class for animation
                    entry.target.classList.add("animate");
                } else {
                    // Do something when the element exits the viewport
                    console.log("Element is not visible");
                    // For example, remove the CSS class for animation
                    entry.target.classList.remove("animate");
                }
            });
        }, options);

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        // Clean up the observer
        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);

    return (
        <div id="services" className="services">
            <div className="services-container Philospher-700" ref={textRef}>
                <div className="services-text-wrapper" >
                    <h1 className="services-text-header">OUR SERVICES</h1>

                    <p className="services-para">Scale your projects with our Software and Cloud Solutions</p>

                    <div className="cards">
                        <div className="card red">
                            <p className="tip">Web Development</p>
                            <img src={WebDImage} alt="Web Development" />
                            <p className="second-text">Build stunning websites</p>
                        </div>
                        <div className="card blue">
                            <p className="tip">Cloud Solutions</p>
                            <img src={CloudCImage} alt="Cloud Computing" />
                            <p className="second-text">Use Cloud to develop</p>
                        </div>
                        <div className="card green">
                            <p className="tip">Designing</p>
                            <img src={DesignImage} alt="Design Software" />
                            <p className="second-text">Create amazing designs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
