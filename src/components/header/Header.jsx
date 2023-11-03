import './Header.sass'
import { Link } from "react-router-dom";

export default function Header(props){
    return (
    <header className='header'>
        <nav>
          <h1>Reda Eskouni</h1>
          <ul>
            <li><Link to='/home'>Home</Link> </li>
            <li><Link to='/education'>Education</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/contact-me'>Contact me</Link></li>
            <li><Link to='/all-image'>images</Link></li>
          </ul>
        </nav>

    </header>
    )
}