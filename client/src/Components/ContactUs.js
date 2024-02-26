import React , {useState} from "react";
import { useRef, useEffect } from "react";
import "./ContactUs.css";

export default function ContactUs() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");
    const [error,setError]=useState("");
    
    const submitFeedback=async(e)=>{
        if(name==="" || email==="" || message===""){
            setError("Please fill all the fields");
        }
        else{
            e.target.disabled=true;
            try{
                const response=await fetch("/api/submit",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({name,email,message})
                });
                if(response.status===200){
                    setError("");
                    setName("");
                    setEmail("");
                    setMessage("");
                    // setError("Feedback submitted successfully");
                }
                else{
                    setError("Feedback submission failed");
                    e.target.disabled=false
                }
            }catch(err){
                setError("Feedback submission failed");
                e.target.disabled=false
            }
            
        }
    }

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
        <div className="contact-us" id="contact-us">
            <div className="contact-us-container Orbitron-700" ref={textRef}>
                <div className="contact-us-text-wrapper">
                    <span className="contact-us-text-header">Contact Us</span>
                    <p className="contact-us-para">
                        Feel free to contact us for any queries or suggestions. We are here to help you.
                        Fill the form and we will get back to you as soon as possible.
                    </p>
                    
                </div>
                <div className="contact-us-form-wrapper" ref={imageRef}>
                    <span className="contact-us-form-header">Contact Form</span>
                    <span className="error">{error}</span>
                    <input type="text" className="input-field" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
                    <input type="email" className="input-field" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <textarea placeholder="Message" className="textarea-field" value={message} onChange={(e)=>setMessage(e.target.value)} />
                    <button className="contact-us-button" onClick={submitFeedback}>
                        <a>
                            <span>Submit</span>
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}