import images  from "../../components/images";
import SvgFrontEnd from "./svg/SvgFrontEnd";

export default function FrontEnd(){
    return(
        <div id="front-end" className="full-stack front-end row">
            <SvgFrontEnd />
            <div className="full-stack-box full-stack-box-front-end col-md-6">
                <h6 className="animation-direction-to-left-1s">Front-end web development</h6>
                <div className="full-stack-icon-box animation-direction-to-left-2s">
                    <img src={images.html5} alt="html5" />
                    <img src={images.css} alt="css" />
                    <img src={images.sass} alt="sass" />
                    <img src={images.bootstrap} className="icon-bootstrap" alt="bootstrap" />
                    <img src={images.js} alt="js" />
                    <img src={images.react} alt="react" />
                    <img src={images.vue} className="icon-vue" alt="vue" />
                </div>
                <ul className="animation-direction-to-left-3s">
                    <li>
                        <i class="fa-solid fa-bolt text-warning"></i>Building responsive website using React.js
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