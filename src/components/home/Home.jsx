import './Home.sass';
//import images  from "../../components/images";
import HomeRedaEskouni from "./HomeRedaEskouni"
import FrontEnd from "./FrontEnd"
import BackEnd from "./BackEnd"
import Cloud from "./Cloud"

export default function Home(props){
    return(
    <main className="container">
        <HomeRedaEskouni />
        <h1 className="what-i-do text-center">What I Do?</h1>
        <FrontEnd />
        <BackEnd />
        <Cloud/>
    </main>
    )
}