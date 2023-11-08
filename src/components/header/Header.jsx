import { useState , useEffect , useRef } from 'react';
import './Header.sass'
import { Link } from "react-router-dom";

export default function Header(props){
    const [heightHeader, setHeightHeader] = useState({height: "90px"})
    const boxLink = useRef();


    const hiddenBoxLink =()=>{
      if( heightHeader.height == "90px"){
        setHeightHeader({height: "180px"})
      }else{
        setHeightHeader({height: "90px"})
      }
    }

    
    // const handleResize =()=>{
    //   if( window.innerWidth >= 992){
    //     setHeightHeader({height: "90px"})
    //   }else{
    //     setHeightHeader({height: "90px"})
    //   }
    // }

    // useEffect(()=>{
    //   window.addEventListener('resize', handleResize);
    // },[])
    
    return (
    <header  style={(props.splash)?{display:"none"}:{display:"block", ...heightHeader}} onClick={props.asideHidden} className='header'>
        {/* <nav>
          <div className='responsive'>
            <h1><Link to='/'>Reda Eskouni</Link></h1>
            <button onClick={hiddenBoxLink} className='btn btn-light'> <i className="fa-solid fa-bars fs-3"></i> </button>
          </div>
          <div className='box-link'  ref={boxLink}>
            <ul> 
              <li><Link to='/home'>Home</Link> </li>
              <li><Link to='/education'>Education</Link></li>
              <li><Link to='/projects'>Projects</Link></li>
              <li><Link to='/contact-me'>Contact me</Link></li>
              <li onClick={props.asideVisible} className='li-fa-gear'> <i className=" fa-solid fa-gear"></i> </li>
            </ul>
          </div>
        </nav> */}
<nav className="navbar navbar-expand-lg">
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
      </ul>
    </div>
    <div onClick={props.asideVisible} className="gear"><i className=" fa-solid fa-gear"></i> </div>
  </div>
</nav>
    </header>
    )
}