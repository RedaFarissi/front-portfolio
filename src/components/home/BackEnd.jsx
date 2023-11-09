import images  from "../../components/images";
import SvgBackEndIcon from "./svg/SvgBackEndIcon"

export default function BackEnd(){
    return(
    <div className="full-stack row">
        <SvgBackEndIcon/>
        <img 
            className="full-stack-img back-end-svg col-md-6" 
            src={images.backEnd} alt="backEnd" 
        />
        <div className="full-stack-box full-stack-box-back-end col-md-6">
            <h6>Back-end web development</h6>
            <div className="full-stack-icon-box" >
                <img src={images.php} alt="php" />
                <img src={images.laravel} className="icon-laravel" alt="laravel" />
                <img src={images.python} alt="python" />
                <img src={images.django} className="icon-django" alt="django" />
            </div>
            <ul>
                <li>
                    <i class="fa-solid fa-bolt text-warning"></i>
                    Backend developer experienced with Laravel and Django for server-side development
                </li>
                <li>
                    <i class="fa-solid fa-bolt text-warning"></i> 
                    Create API with django rest framework
                </li>
            </ul>
        </div>
    </div>
    )
}