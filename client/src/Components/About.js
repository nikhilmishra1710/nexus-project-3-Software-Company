import React, { useState , useRef , useEffect } from "react";
import "./About.css";
import AboutImage from "../Images/aboutImage.jpg";

export default function Hero() {
    const [isMouseOver, setIsMouseOver] = useState(false);

    const changeAngle = (e) => {
        if (!isMouseOver) return;

        const image = e.currentTarget;
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        const left = x - image.getBoundingClientRect().left;
        const top = y - image.getBoundingClientRect().top;
        const center = {
            x: left - image.offsetWidth / 2,
            y: top - image.offsetHeight / 2,
        };
        const distance = Math.sqrt(center.x ** 2 + center.y ** 2);
        image.style.transform = `scale3d(1.07,1.07,1.07) rotate3d(${center.y / 100},${center.x / 100},0,${Math.log(distance) * 2}deg) translate(-${x * 30}px, -${y * 30}px)`;
    };

    const resetImage = (e) => {
        const image = e.currentTarget;
        image.style.transform = "scale3d(1,1,1) rotate3d(0,0,0,0deg)";
        setIsMouseOver(false);
    };

    const textRef = useRef(null);
    const imageRef = useRef(null);
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
        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        // Clean up the observer
        return () => {
           
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);

    return (
        <div className="about" id="aboutus">
            <div className="about-container Philospher-700">
                <div className="about-image-wrapper" ref={imageRef}>
                    <img
                        onMouseEnter={() => setIsMouseOver(true)}
                        onMouseLeave={resetImage}
                        onMouseMove={changeAngle}
                        src={AboutImage}
                        alt="hero"
                        className="about-image image-container"
                    />
                </div>
                <div className="about-text-wrapper" ref={textRef}>
                    <span className="about-text-header">About Us</span>

                    <p className="about-para">
                        At Tech Cloud, we offer tailored website solutions designed for your business. Coupled with business growth ideas and strategies, our goal is to foster the
                        expansion of your business. We believe in making every business thrive in both digital and offline realms. “Join the future trend of business with the help
                        of Tech Cloud, and let’s grow together.
                    </p>
                    <button className="about-button">
                        <a href="#services">
                            <span>OUR SERVICES</span>
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}
