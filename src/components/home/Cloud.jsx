import images  from "../../components/images";
import SvgCloud from "./svg/SvgCloud"

export default function BackEnd(){
    return(
    <div className="full-stack full-stack-cloud row">
        <SvgCloud />
        <div className="full-stack-box col-md-6 mt-5">
            <h6 className="animation-direction-to-left-1s">Cloud Infra-Architecture</h6>
            <div className="full-stack-icon-box animation-direction-to-left-2s">
                <img src={images.docker} alt="css" />
               
            </div>
            <ul className="animation-direction-to-left-3s">
                <li>
                    <i class="fa-solid fa-bolt text-warning"></i>
                    Hosting and maintaining websites on virtual machine instances along with integration of databases
                </li>
            </ul>
        </div>
    </div>
    )
}