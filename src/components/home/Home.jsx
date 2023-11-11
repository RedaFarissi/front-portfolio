import './Home.sass';
//import images  from "../../components/images";
import HomeRedaEskouni from "./HomeRedaEskouni"
import FrontEnd from "./FrontEnd"
import BackEnd from "./BackEnd"
import Cloud from "./Cloud"
import { useEffect } from 'react';

export default function Home(props){
    
    useEffect(()=>{
        props.removeSplash()
        // animation from bottom to top when observe
        props.observerAnimation("animation-to-top" , document.querySelectorAll(".animation-direction-to-top") )    
        
        // animation from left to right when observe
        props.observerAnimation("animation-to-right-1s" , document.querySelectorAll(".animation-direction-to-right-1s") )
        props.observerAnimation("animation-to-right-2s" , document.querySelectorAll(".animation-direction-to-right-2s") )
        props.observerAnimation("animation-to-right-3s" , document.querySelectorAll(".animation-direction-to-right-3s") )
        props.observerAnimation("animation-to-right-4s" , document.querySelectorAll(".animation-direction-to-right-4s") )
        props.observerAnimation("animation-to-right-5s" , document.querySelectorAll(".animation-direction-to-right-5s") )
        // animation from right to left when observe
        props.observerAnimation("animation-to-left-1s" , document.querySelectorAll(".animation-direction-to-left-1s") )
        props.observerAnimation("animation-to-left-2s" , document.querySelectorAll(".animation-direction-to-left-2s") )
        props.observerAnimation("animation-to-left-3s" , document.querySelectorAll(".animation-direction-to-left-3s") )

    },[])
    
    
    return(
    <main onClick={props.asideHidden} id='home'>
        <HomeRedaEskouni handleMailtoClick={props.handleMailtoClick} />
        <h1 className="what-i-do text-center animation-direction-to-top">What I Do?</h1>
        <FrontEnd />
        <BackEnd />
        <Cloud/>
    </main>
    )
}