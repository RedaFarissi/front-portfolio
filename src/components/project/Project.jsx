import images  from "../../components/images";
import SvgProject from "./svg/SvgProject";
import "./Project.sass"
import { useEffect } from "react";

export default function Project(props){
    useEffect(()=>{
        props.removeSplash()
    },[])
    const github_project = [
        {id:"1",  title:"Portfolio" ,  paragraph:"The Complete Customizable Software Developer Portfolio Template which lets you showcase your projects.",link:"https://github.com/RedaFarissi/portfolio" , languageLogoUsed: [images.html5,images.css,images.sass,images.js,images.bootstrap,images.react,images.docker] , created:"2023"},
        {id:"2",  title:"Front-End Ecommerce" ,  paragraph:"Crafted a responsive e-commerce front-end with React, delivering an elegant user interface. Seamlessly integrates with a secure back-end featuring robust authentication for a comprehensive shopping experience.",link:"https://github.com/RedaFarissi/front-ecommerce" , languageLogoUsed: [images.html5,images.css,images.js,images.bootstrap,images.react,images.docker] , created:"2023"},
        {id:"3",  title:"Back-End Ecommerce" ,  paragraph:"Explore my GitHub back-end project for e-commerce. It features robust APIs, secure authentication, and efficient database management, ensuring a seamless connection with the front-end using Django Rest Framework.",link:"https://github.com/RedaFarissi/back-ecommerce" , languageLogoUsed: [images.html5,images.css,images.js,images.bootstrap,images.django,images.docker] , created:"2023"},
        {id:"4",  title:"Laravel Ecommerce" ,  paragraph:"Experienced web developer adept in building e-commerce websites with Laravel. Expertise in crafting scalable and feature-rich platforms, ensuring seamless transactions and user experiences.",link:"https://github.com/RedaFarissi/laravel_shop" , languageLogoUsed: [images.html5,images.css,images.js, images.php ,images.laravel,images.docker] , created:"2023"},
        {id:"5",  title:"Django Ecommerce" ,  paragraph:"Skilled web developer specializing in e-commerce solutions with Django. Proficient in creating scalable platforms with robust features, ensuring seamless transactions and exceptional user experiences.",link:"https://github.com/RedaFarissi/shopping" , languageLogoUsed: [images.html5,images.css,images.python,images.django,images.docker] , created:"2022"},
        {id:"6",  title:"Parchessi Game" ,  paragraph:"Developed responsive game with React.js, featuring intricate and interactive gameplay mechanics. Proficient in handling diverse in-game conditions.",link:"https://github.com/RedaFarissi/parchessi-algo" , languageLogoUsed: [images.html5,images.css,images.js,images.bootstrap,images.react,images.docker] , created:"2021"},
    ]
    var projects = github_project.map(e=>(
        <div className="col-lg-4 p-2 mb-3">
            <a href={e.link} target="_blanck" className="link p-2">
                <div className="card card-project m-0">
                    <div className="card-header color-to-bg">
                        <h4 className={`cart_animation_${e.id}`}><i className="fab fa-github me-2"></i> {e.title}</h4>
                    </div>
                    <div className="card-body color-to-bg">
                        <p className={`card-text cart_animation_${e.id}`}>{e.paragraph}</p>
                    </div>
                    <div className={`card-footer color-to-bg border-0`}>
                        <div className={`cart_animation_${e.id}`}>
                            <span>Created on {e.created}</span>
                            <div className="techno-used">
                                {e.languageLogoUsed.map(img=>(
                                    <img src={img} className="techno-used-img" style={(img.includes('django'))?{width:"50px"}:{}} alt={`logo-${e.id}`}/>
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
        <div className="d-flex justify-content-center align-items-center rounded">
            <a className="btn more-project text-center" href="https://github.com/RedaFarissi/">More Project</a>
        </div>
    </main>
    )
}