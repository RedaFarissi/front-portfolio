import images  from "../../components/images";
import SvgProject from "./svg/SvgProject";
import "./Project.sass"

export default function Project(props){
    const github_project = [
        {id:"1", title:"Portfolio" ,  paragraph:"The Complete Customizable Software Developer Portfolio Template which lets you showcase your projects",link:"https://github.com/RedaFarissi/" , languageLogoUsed: [images.html5,images.css,images.sass,images.js,images.bootstrap,images.react,images.docker,]} ,
        {id:"2", title:"Front-End Ecommerce" ,  paragraph:"pppp",link:"https://github.com/RedaFarissi/front-ecommerce" , languageLogoUsed: [images.html5,images.css,images.js,images.bootstrap,images.react]} ,  
        {id:"3", title:"Back-End Ecommerce" ,  paragraph:"pppp",link:"https://github.com/RedaFarissi/back-ecommerce" , languageLogoUsed: [images.html5,images.css,images.js,images.bootstrap,images.django]} ,  
        {id:"4", title:"Laravel Ecommerce" ,  paragraph:"pppp",link:"https://github.com/RedaFarissi/laravel_shop" , languageLogoUsed: [images.html5,images.css,images.js, images.php ,images.laravel]},
        {id:"5", title:"Django Ecommerce" ,  paragraph:"pppp",link:"https://github.com/RedaFarissi/shopping" , languageLogoUsed: [images.html5,images.css,images.python,images.django]} ,  
        {id:"6", title:"Parchessi Game" ,  paragraph:"pppp",link:"https://github.com/RedaFarissi/parchessi-algo" , languageLogoUsed: [images.html5,images.css,images.js,images.bootstrap,images.react]} ,  
    ]
    var projects = github_project.map(e=>(
        <div className="col-lg-4 mb-3">
            <a href={e.link} className="link color-to-bg-opacity-3 p-2">
                <div className="card card-project m-0">
                    <div className="card-header color-to-bg-opacity-8">
                        <h4 className={`cart_animation_${e.id}`}><i className="fab fa-github me-2 text-dark"></i> {e.title}</h4>
                    </div>
                    <div className="card-body  color-to-bg-opacity-8">
                        <p className={`card-text cart_animation_${e.id}`}>{e.paragraph}</p>
                    </div>
                    <div className={`card-footer color-to-bg-opacity-8 border-0`}>
                        <div className={`cart_animation_${e.id}`}>
                            <span>Created on 2020</span>
                            <div className="techno-used">
                                {e.languageLogoUsed.map(img=>(
                                    <img src={img} className="techno-used-img" alt={`logo-${e.id}`}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    ))

    return (

    <main onClick={props.asideHidden} className="container-fliud">
        <div className="container">
            <div className="projects-intro row">
                <SvgProject />
                <div className="projects-box col-md-6 pt-5">
                    <h1 className="text-center">Projects</h1>
                    <p className="text-center"> 
                        My projects makes use of vast variety of latest technology tools. 
                    </p> 
                </div>
            </div>
        </div>
        <div className="row projects mx-3">
            
            {projects}
            
        </div>
        
    </main>
    )
}