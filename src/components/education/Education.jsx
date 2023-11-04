import images  from "../../components/images";
import "./Education.sass"
import SvgMozilla from "./svg/SvgMozilla";
import SvgEducation from "./svg/SvgEducation";

export default function Education(props){
    return(
<main onClick={props.asideHidden} className="container">
    <div className="education row">
        <SvgEducation />
        <div className="education-box col-md-6 pt-5">
            <h1 className="text-center">Education</h1>
            <p className="text-center"> Uninterrupted self-learning  </p> 
            <div className="text-center">
                <a><img src={images.w3Schools_logo} alt="w3Schools logo"/></a>
                <a> <SvgMozilla /></a>
                <a><img src={images.books} alt="books logo"/></a>
            </div>
        </div>
    </div>
    
    <h1 className="Degrees-title text-center">Degrees Received</h1>
    
    <div className="degrees-received row">
        <div className="degrees-received-box-img col-md-3 mt-5">
            <img  src={images.miage_logo} className="miage_logo" alt="miage_logo" />
        </div>
        <div className="col-md-9 mt-5 p-0">
            <div className="card card-miage">
                <div className="card-header">
                    <h4>Header</h4>
                    <p>paragragh</p>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Success card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div dir='rtl' className="card-footer border-0">
                    <button className="btn">Viste Website</button>
                </div>
            </div>
        </div> 
        

        <div className="degrees-received-box-img col-md-3 mt-5">
            <img  src={images.ensa} className="ensa_logo" alt="ensa"/>
        </div>
        
        <div className="col-md-9 mt-5 p-0">
            <div className="card card-ensa">
                <div className="card-header">
                    <h3>Header</h3>
                    <p>paragragh</p>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Success card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div dir='rtl' className="card-footer border-0">
                    <button className="btn">Viste Website</button>
                </div>
            </div>
        </div>        
    </div>
</main>
    )
}