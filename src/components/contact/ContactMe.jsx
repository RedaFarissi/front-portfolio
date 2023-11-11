import "./ContactMe.sass"
import React, { useEffect, useRef , useState} from 'react';
import SvgMail from "./svg/SvgMail";
import axios from 'axios';


export default function ContactMe(props){
    const cadreImageRef = useRef(null);
    const [data, setData] = useState({   
        title: "",
        email: "",
        message: "",
    });
    const [sendMessage, setSendMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
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
        props.observerAnimation("animation-to-right-3s" , document.querySelectorAll(".animation-direction-to-right-3s") )
        props.observerAnimation("animation-to-right-4s" , document.querySelectorAll(".animation-direction-to-right-4s") )
        props.observerAnimation("animation-to-right-5s" , document.querySelectorAll(".animation-direction-to-right-5s") )
        props.observerAnimation("animation-to-left-1s" , document.querySelectorAll(".animation-direction-to-left-1s") )
        props.observerAnimation("animation-to-left-2s" , document.querySelectorAll(".animation-direction-to-left-2s") )
        props.observerAnimation("animation-to-left-3s" , document.querySelectorAll(".animation-direction-to-left-3s") )
        props.observerAnimation("animation-to-left-4s" , document.querySelectorAll(".animation-direction-to-left-4s") )
    }, []);

    // handle request 
    
    const handleInputChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };
  
    const conatctCreatePost = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('email', data.email);
        formData.append('message', data.message);
        setSendMessage(false);setErrorMessage(false);
        try {
            console.log("Before axios.post");
            const response = await axios.post(`${props.domain}/api/create-contact/`, formData);
            if(response.data.msg === "Message Send Success") setSendMessage(true)
            if(response.data.msg === "Message Error") setErrorMessage(true)
        } catch (error) {
            console.error("Error sending message:", error.response.data);
            console.log("Message Error");
        }
   
        
    };
    const handleEmailClick = () => {
        const emailAddress = 'redaredaeskouni@example.com';
        const subject = 'Subject of the email';
        const body = 'Body of the email';
    
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Open the default email client
        window.location.href = mailtoLink;
      };
    
    return(  
    <main onClick={props.asideHidden} className="contact-main">
        <div className="contact-map">
        {console.log(123)}
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

            {(sendMessage)?(<div className="alert alert-success">Message Send Success</div>):""}
            {(errorMessage)?(<div className="alert alert-danger">Check from Your Input</div>):""}

            <form onSubmit={conatctCreatePost} method="POST">
                <input type='text' name='title' onChange={handleInputChange} value={data.title} className="subject rounded animation-direction-to-left-2s" placeholder='Title of the email (subject)' required /><br/>
                <input type='email' name='email' onChange={handleInputChange} value={data.email} className="rounded animation-direction-to-left-3s" placeholder='Your email' required/><br/>
                <textarea name='message' onChange={handleInputChange} value={data.message} className='textarea animation-direction-to-left-4s' placeholder='Your message'>  </textarea>
                <button type='submit' className='button btn px-5 py-2 fs-5 animation-direction-to-top'> Send </button>
            </form>
            
           
            
            <div className="contact_box">
                <h5 id="collection" className='my-3 ms-3 animation-direction-to-right-1s'>social</h5>
                <div className='d-flex animation-direction-to-right-2s'>
                    <i className="fa-regular fa-location-dot mt-1 mx-3"></i>
                    <p>DR JDID, Rue 55 No 23 Sidi Slimane</p>
                </div>

                <div className='d-flex animation-direction-to-right-3s'>
                    <i className="fa-solid fa-phone mt-1 mx-3"></i>
                    <p> +212 6 06 70 56 46 </p>
                </div>
                <div className='d-flex animation-direction-to-right-4s'>
                    <i className="fa-solid fa-envelope mt-1 mx-3"></i>
                    <p> redaesskouni@gmail.com </p>
                </div>
                <ul className="animation-direction-to-right-5s">
                    <li>
                        <a className="btn-github" href="https://github.com/RedaFarissi/" target="_blanck"> 
                            <span><i className="fab fa-github text-light"></i></span>
                        </a>
                    </li>
                    <li>
                        <a className="btn-linkedin" href="https://www.linkedin.com/in/reda-eskouni-aa4361209/" target="_blanck"> 
                            <span><i className="fa-brands fa-linkedin-in text-light"></i></span>
                        </a>
                    </li>
                    <li>
                        <a className="btn-facebook" href="https://www.facebook.com/profile.php?id=100007840725728" target="_blanck"> 
                            <span><i className="fa-brands fa-facebook-f text-light"></i></span>
                        </a>
                    </li>
                    <li>
                        <div className="btn-gmail" onClick={handleEmailClick}> 
                            <span><i className="fab fa-google text-light"></i></span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </main>
    )
}