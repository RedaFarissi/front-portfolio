import images  from "../../components/images";
import SvgFrontEnd from "./svg/SvgFrontEnd";

export default function FrontEnd(){
    return(
        <div  className="full-stack row">
            <SvgFrontEnd />
            <div className="full-stack-box col-md-6">
                <h6>Front-end web development</h6>
                <div className="full-stack-icon-box">
                    <img src={images.html5} alt="html5" />
                    <img src={images.css} alt="css" />
                    <img src={images.sass} alt="sass" />
                    <img src={images.bootstrap} className="icon-bootstrap" alt="bootstrap" />
                    <img src={images.js} alt="js" />
                    <img src={images.react} alt="react" />
                    <img src={images.vue} className="icon-vue" alt="vue" />
                </div>
                <ul>
                    <li>
                        <i class="fa-solid fa-bolt text-warning"></i>
                        Building responsive website front end using React.js
                    </li>
                    <li>
                        <i class="fa-solid fa-bolt text-warning"></i> 
                        Building responsive website using Vue.js
                    </li>
                    <li>
                        <i class="fa-solid fa-bolt text-warning"></i> 
                        Good experience working on JavaScript 
                    </li>
                </ul>
            </div>
        </div>
    )
}