import SvgEskouni from "./svg/SvgEskouni";
import "./Home.sass"
export default function HomeRedaEskouni(props){
    return(
        <div className="eskouni row" >
            <div className="eskouni-box col-md-6">
                <h1 className="full-name animation-direction-to-right-1s"> Reda Eskouni </h1>
                <h6 className="animation-direction-to-right-2s">(Full Stack developer)</h6>
                <p className="animation-direction-to-right-3s">A passionate individual who always strives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</p>
                <div className="social-media-div animation-direction-to-right-4s">
                    <a className="btn-github" href="https://github.com/RedaFarissi/" target="_blanck"> 
                        <span><i className="fab fa-github text-light"></i></span>
                    </a>
                    <a className="btn-linkedin" href="https://www.linkedin.com/in/reda-eskouni-aa4361209/" target="_blanck"> 
                        <span><i class="fa-brands fa-linkedin-in text-light"></i></span>
                    </a>
                    <a className="btn-facebook" href="https://www.facebook.com/profile.php?id=100007840725728" target="_blanck"> 
                        <span><i class="fa-brands fa-facebook-f text-light"></i></span>
                    </a>
                    <div className="btn-gmail" onClick={props.handleMailtoClick}> 
                        <span><i className="fab fa-google text-light"></i></span>
                    </div>
                </div>
                <a href="https://github.com/RedaFarissi" target="_blanck" className="btn  animation-direction-to-right-5s"> <i class="fa-solid fa-star"></i> Star Me On Github </a>
            </div>
            <SvgEskouni />
        </div>
    )
}