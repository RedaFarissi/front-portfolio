import SvgEskouni from "./svg/SvgEskouni";
import "./Home.sass"
export default function HomeRedaEskouni(){
    return(
        <div className="eskouni row" >
            <div className="eskouni-box col-md-6">
                <h1 className="full-name"> Reda <br/>Eskouni </h1>
                <h6 className="color-opacity-8">(Full Stack developer)</h6>
                <p>A passionate individual who always strives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</p>
                <div className="social-media-div">
                    <a className="btn-github" href="https://github.com/RedaFarissi/"> 
                        <span><i className="fab fa-github text-light"></i></span>
                    </a>
                    <a className="btn-linkedin" href="#"> 
                        <span><i class="fa-brands fa-linkedin-in text-light"></i></span>
                    </a>
                    <a className="btn-facebook" href="#"> 
                        <span><i class="fa-brands fa-facebook-f text-light"></i></span>
                    </a>
                    <a className="btn-gmail" href="#"> 
                        <span><i className="fab fa-google text-light"></i></span>
                    </a>
                </div>
                <a href="https://github.com/RedaFarissi" target="_blanck" className="btn"> <i class="fa-solid fa-star me-2 text-warning text-light"></i> Star Me On Github </a>
            </div>
            <SvgEskouni />
        </div>
    )
}