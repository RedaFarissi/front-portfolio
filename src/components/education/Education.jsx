import images  from "../../components/images";
import "./Education.sass"
import SvgMozilla from "./svg/SvgMozilla";
import SvgEducation from "./svg/SvgEducation";
import { useEffect } from "react";

export default function Education(props){
    useEffect(()=>{
        props.removeSplash()


        //Handle Animation on observe
        props.observerAnimation("animation-to-top" , document.querySelectorAll(".animation-direction-to-top") )    
        props.observerAnimation("animation-to-right-1s" , document.querySelectorAll(".animation-direction-to-right-1s") )
        props.observerAnimation("animation-to-right-2s" , document.querySelectorAll(".animation-direction-to-right-2s") )
        props.observerAnimation("animation-to-left-1s" , document.querySelectorAll(".animation-direction-to-left-1s") )
        props.observerAnimation("animation-to-left-2s" , document.querySelectorAll(".animation-direction-to-left-2s") )
        props.observerAnimation("animation-to-left-3s" , document.querySelectorAll(".animation-direction-to-left-3s") )

    },[])
    return(
<main onClick={props.asideHidden} className="container">
    <div className="education row">
        <SvgEducation />
        <div className="education-box col-md-6">
            <h1 className="text-center animation-direction-to-left-1s">Education</h1>
            <p className="text-center animation-direction-to-left-2s"> Uninterrupted self-learning  </p> 
            <div className="text-center animation-direction-to-left-3s">
                <a href="https://www.w3schools.com/" target="_blanck"><img src={images.w3Schools_logo} alt="w3Schools logo"/></a>
                <a href="https://developer.mozilla.org/en-US/docs/Glossary/Python" target="_blanck"> <SvgMozilla /></a>
            </div>
        </div>
    </div>
    
    <h1 className="Degrees-title text-center animation-direction-to-top">Degrees Received</h1>
    
    <div className="degrees-received row">
        <div className="degrees-received-box-img col-lg-3">
            <img  src={images.miage_logo} className="miage_logo animation-direction-to-right-1s" alt="miage logo" />
        </div>
        <div className="col-lg-9 mt-4 p-1">
            <div className="card card-miage animation-direction-to-left-1s">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <div>
                        <h4>Header</h4>
                        <p>paragragh</p>
                    </div>
                    <img  src={images.miage_logo} className="logo_inside_card" alt="miage logo" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Success card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div dir='rtl' className="card-footer border-0">
                    <button className="btn">Viste Website</button>
                </div>
            </div>
        </div> 
        

        <div className="degrees-received-box-img col-lg-3">
            <img  src={images.ensa} className="ensa_logo animation-direction-to-right-2s" alt="ensa logo"/>
        </div>
        
        <div className="col-lg-9 mt-4 p-1 animation-direction-to-left-2s">
            <div className="card card-ensa">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <div>
                        <h3>Header</h3>
                        <p>paragragh</p>
                    </div>
                    <img  src={images.ensa} className="logo_inside_card ensa-chnage-width" alt="ensa logo" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Success card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div dir='rtl' className="card-footer border-0">
                    <button className="btn">Viste Website</button>
                </div>
            </div>
        </div>        
    </div>
</main>
    )
}