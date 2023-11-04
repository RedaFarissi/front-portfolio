import "./ContactMe.sass"
import React, { useEffect, useRef } from 'react';
import SvgMail from "./svg/SvgMail";

export default function ContactMe(props){
    const cadreImageRef = useRef(null);
    useEffect(() => {
        const cadreImageHeight =()=>{
            if (cadreImageRef.current) {
                const cadreWidthPercent = parseFloat(getComputedStyle(cadreImageRef.current).width);
                cadreImageRef.current.style.height = `${cadreWidthPercent}px`;
            }
        }
        cadreImageHeight()
    }, []);

    return(
    <main onClick={props.asideHidden} className="container main">
        <div className="contact row">
            <div className="col-md-6">
                <div ref={cadreImageRef} className="contact-img rounded-circle d-flex justify-content-center align-items-center border border-5">
                    <i className="fa-solid fa-user"></i>
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
            <div className="adress-box  col-md-6 pt-5">
                <h3>Address</h3>
                <p className="text-center"> Sidi Slimane : 34.258471, -5.941529</p>
                <a className="btn color-to-bg" href="https://maps.app.goo.gl/qyqYEMDmD9mTqkR3A" target="_blanck"> Visit on Google Maps </a>
            </div>
            <SvgMail />
        </div>
    </main>
    )
}