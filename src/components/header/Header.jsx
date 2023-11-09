import { useState , useEffect , useRef } from 'react';
import './Header.sass'
import { Link } from "react-router-dom";

export default function Header(props){
    const [heightHeader, setHeightHeader] = useState({height: "90px"})
    const [ displayThemesButton, setDisplayThemesButton] = useState({display: "none"})

    const hiddenBoxLink =()=>{
      if( heightHeader.height == "90px"){
        setHeightHeader({height: "220px"})
      }else{
        setHeightHeader({height: "90px"})
      }
    }


    const HandleDisplaThemesButton=()=>{
      (window.window.innerWidth < 992)? setDisplayThemesButton({display: "block"}):setDisplayThemesButton({display: "none"})
      
    }

    useEffect(()=>{
      //handle when resize
      HandleDisplaThemesButton()
      window.addEventListener("resize", HandleDisplaThemesButton)

      // animation from top to bottom when observe
      props.observerAnimation("animation-to-bottom-2s" , document.querySelectorAll(".animation-direction-to-bottom-2s") )

    },[])
  
    
    return (
    <header  style={(props.splash)?{display:"none"}:{display:"block", ...heightHeader}} onClick={props.asideHidden} className='header'>
      <nav className="navbar navbar-expand-lg animation-direction-to-bottom-2s">
        <div className="container-fluid">
          <h1><Link to='/'>Reda Eskouni</Link></h1>
          <button className="btn navbar-toggler" onClick={hiddenBoxLink} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="box-link collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"> <Link to='/home'>Home</Link>  </li>
              <li className="nav-item"> <Link to='/education'>Education</Link></li>
              <li className="nav-item"> <Link to='/projects'>Projects</Link></li>
              <li className="nav-item"> <Link to='/contact-me' className='Contact-me'>Contact me</Link></li>
              <li onClick={props.asideVisible} style={displayThemesButton} className="nav-item cursor-pointer"> <a>themes</a> </li>
            </ul>
          </div>
          <div onClick={props.asideVisible} style={(displayThemesButton.display=="block")?{display:"none"}:{display:"block"}} className="gear"><i className=" fa-solid fa-gear"></i> </div>
        </div>
      </nav>
    </header>
    )
}