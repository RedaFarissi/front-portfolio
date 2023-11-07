import './Home.sass';
//import images  from "../../components/images";
import HomeRedaEskouni from "./HomeRedaEskouni"
import FrontEnd from "./FrontEnd"
import BackEnd from "./BackEnd"
import Cloud from "./Cloud"
import { useEffect } from 'react';

export default function Home(props){
    useEffect(()=>{
        props.removeSplash()
    },[])
    return(
    <main onClick={props.asideHidden} id='home'>
        <HomeRedaEskouni />
        <h1 className="what-i-do text-center">What I Do?</h1>
        <FrontEnd />
        <BackEnd />
        <Cloud/>
    </main>
    )
}