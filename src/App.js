import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import { 
  Header , Aside , Footer ,  Home , Education , Project , ContactMe
} from './components/path';
import './App.sass';
import React , {Component} from 'react';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      asideDisplay: {visibility: "hidden"} ,
    }
  }
  asideVisible =(event)=>{
    this.setState( prevState => ({...prevState , asideDisplay:{visibility: "visible"} }) )
    event.stopPropagation();
  }
  asideHidden =()=>{
    this.setState( prevState => ({...prevState , asideDisplay:{visibility: "hidden"} }) )
  }

  changeColor = (bgColor,color,opacityColor)=>{
    document.documentElement.style.setProperty('--bg-color', bgColor);
    document.documentElement.style.setProperty('--text-color', color);
    document.documentElement.style.setProperty('--text-color-opacity', opacityColor);
    localStorage.setItem("bgColor" , bgColor);
    localStorage.setItem("color" , color);
    localStorage.setItem("opacityColor" , opacityColor); 
  }

 
 

  componentDidMount(){
    if(localStorage.getItem("bgColor") && localStorage.getItem("color") && localStorage.getItem("opacityColor")){
      this.changeColor(localStorage.getItem("bgColor"),localStorage.getItem("color"),localStorage.getItem("opacityColor"))
    }
  }
  
  render(){
    return(
      <Router >
          <Header asideVisible={this.asideVisible} asideHidden={this.asideHidden} />
          <Aside 
            asideDisplay={this.state.asideDisplay} 
            changeColor={this.changeColor} 
            handleSvgColorClass={this.handleSvgColorClass} 
          />      
          <Routes>
              <Route path='/home' element={<Home asideHidden={this.asideHidden} />} /> 
              <Route path='/education' element={<Education asideHidden={this.asideHidden} />} /> 
              <Route path='/projects' element={<Project asideHidden={this.asideHidden} />} /> 
              <Route path='/contact-me' element={<ContactMe asideHidden={this.asideHidden} />} /> 
          </Routes>          
          <Footer asideHidden={this.asideHidden} />
      </Router> 
    )
  }
}



export default App;
