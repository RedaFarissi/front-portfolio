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
        props.observerAnimation("animation-to-left-2s" , document.querySelectorAll(".animation-direction-to-left-2s") )
        props.observerAnimation("animation-to-left-3s" , document.querySelectorAll(".animation-direction-to-left-3s") )
        props.observerAnimation("animation-to-left-4s" , document.querySelectorAll(".animation-direction-to-left-4s") )
    }, []);

    return(  
    <main onClick={props.asideHidden} className="contact-main">
        <div className="container">

            <div className="adress row">
                <div className="adress-box col-md-6">
                    <a className="btn color-to-bg animation-direction-to-right-1s" href="https://maps.app.goo.gl/qyqYEMDmD9mTqkR3A" target="_blanck"> Visit on Google Maps </a>
                </div>
                <SvgMail />
            </div>
        </div>
        <div className="contact-msg  m-auto position-relative rounded mt-5 mb-5 pt-0" >
            <h1 className="animation-direction-to-left-1s">CONTACT ME</h1>
            <hr id="hr-bottom-contact"/>
            <p className="line animation-to-right-2s">I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you to create modern site web</p>
            <form  method="POST">
                <input type='text' name='subject' className="subject rounded animation-direction-to-left-2s" placeholder='Title of the email (subject)' required /><br/>
                <input type='email' name='email' className="rounded animation-direction-to-left-3s" placeholder='Your email' required/><br/>
                <textarea name='message' className='textarea animation-direction-to-left-4s'> Your message </textarea>
                <button type='submit' className='button btn px-5 py-2 fs-5 animation-direction-to-top'> Send </button>
            </form>
            <div className="contact_box">
                <h5 id="collection" className='my-3 ms-3'>social</h5>
                <div className='d-flex'>
                    <i className="fa-regular fa-location-dot mt-1 mx-3"></i>
                    <p>DR JDID, Rue 55 No 23 Sidi Slimane</p>
                </div>

                <div className='d-flex'>
                    <i className="fa-solid fa-phone mt-1 mx-3"></i>
                    <p> +212 6 06 70 56 46 </p>
                </div>
                <div className='d-flex'>
                    <i className="fa-solid fa-envelope mt-1 mx-3"></i>
                    <p> redaesskouni@gmail.com </p>
                </div>
                <ul>
                    <li>
                        <a className="btn-github" href="https://github.com/RedaFarissi/"> 
                            <span><i className="fab fa-github text-light"></i></span>
                        </a>
                    </li>
                    <li>
                        <a className="btn-linkedin" href="#"> 
                            <span><i className="fa-brands fa-linkedin-in text-light"></i></span>
                        </a>
                    </li>
                    <li>
                        <a className="btn-facebook" href="#"> 
                            <span><i className="fa-brands fa-facebook-f text-light"></i></span>
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
    </main>
    )
}