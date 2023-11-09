import "./ContactMe.sass"
import React, { useEffect, useRef } from 'react';
import SvgMail from "./svg/SvgMail";
import images from "../images";

export default function ContactMe(props){
    const cadreImageRef = useRef(null);
    useEffect(() => {
        props.removeSplash()
        const cadreImageHeight =()=>{
            if (cadreImageRef.current) {
                const cadreWidthPercent = parseFloat(getComputedStyle(cadreImageRef.current).width);
                cadreImageRef.current.style.height = `${cadreWidthPercent}px`;
            }
        }
        cadreImageHeight()


        // animation handle code on observe 
        props.observerAnimation("animation-to-top" , document.querySelectorAll(".animation-direction-to-top") )    
        props.observerAnimation("animation-to-right-1s" , document.querySelectorAll(".animation-direction-to-right-1s") )
        props.observerAnimation("animation-to-right-2s" , document.querySelectorAll(".animation-direction-to-right-2s") )
        props.observerAnimation("animation-to-left-1s" , document.querySelectorAll(".animation-direction-to-left-1s") )
    }, []);

    return(
        
    <main onClick={props.asideHidden} po className="container main">
        <div className="contact animation-direction-to-top row">
            
            <div className="col-md-6">
                <div ref={cadreImageRef} className="contact-img">
                   <img src={images.reda} alt="reda profile" className="h-100" />
                </div>
            </div>
            <div className="contact-box col-md-6">
                <h1>Contact Me</h1>
                <p> I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you to create modern site web </p>
                <div className="linkt-to-contact">
                    <ul>
                        <li>
                            <a className="btn-github" href="https://github.com/RedaFarissi/"> 
                                <span><i className="fab fa-github text-light"></i></span>
                            </a>
                        </li>
                        <li>
                            <a className="btn-linkedin" href="#"> 
                                <span><i class="fa-brands fa-linkedin-in text-light"></i></span>
                            </a>
                        </li>
                        <li>
                            <a className="btn-facebook" href="#"> 
                                <span><i class="fa-brands fa-facebook-f text-light"></i></span>
                            </a>
                        </li>
                        <li>
                            <a className="btn-gmail" href="#"> 
                                <span><i className="fab fa-google text-light"></i></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


        <div className="adress row">
            <div className="adress-box  col-md-6">
                <h3 className="animation-direction-to-right-1s">Address</h3>
                <a className="btn color-to-bg animation-direction-to-right-2s" href="https://maps.app.goo.gl/qyqYEMDmD9mTqkR3A" target="_blanck"> Visit on Google Maps </a>
            </div>
            <SvgMail />
        </div>
    </main>
    )
}