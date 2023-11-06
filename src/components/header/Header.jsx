import './Header.sass'
import { Link } from "react-router-dom";

export default function Header(props){
    return (
    <header style={(props.splash)?{display:"none"}:{display:"block"}} onClick={props.asideHidden} className='header'>
        <nav>
          <h1><Link to='/'>Reda Eskouni</Link></h1>
          <ul>
            <li><Link to='/home'>Home</Link> </li>
            <li><Link to='/education'>Education</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/contact-me'>Contact me</Link></li>
            <li> <i onClick={props.asideVisible} className=" fa-solid fa-gear"></i> </li>
          </ul>
        </nav>

    </header>
    )
}