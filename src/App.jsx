import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import { 
  Header , Aside , Footer , Splash , Home , Education , Project , ContactMe 
} from './components/path';
import './App.sass';
import React , { Component, createRef } from 'react';


class App extends Component {
  
  asideRef = createRef();

  constructor(props){
    super(props)
    this.state = {
      domain: "http://127.0.0.1:8000",
      splash: true,
      asideDisplay: {visibility: "hidden"} ,
    }
  }
  asideVisible =(event)=>{
    if(this.state.asideDisplay.visibility === "hidden"){
      
      this.setState({ asideDisplay: {visibility: "visible"} })
    }else{

      this.setState({ asideDisplay: {visibility: "hidden"} });
    }
    
    event.stopPropagation();
  }
  asideHidden =()=>{
    this.setState({asideDisplay:{visibility: "hidden"}})
  }
  // On click in aside themes 
  changeColor = (bgColor,color,opacityColor)=>{
    document.documentElement.style.setProperty('--bg-color', bgColor);
    document.documentElement.style.setProperty('--text-color', color);
    document.documentElement.style.setProperty('--text-color-opacity', opacityColor);
    localStorage.setItem("bgColor" , bgColor);
    localStorage.setItem("color" , color);
    localStorage.setItem("opacityColor" , opacityColor); 
  }
  // Handle splach and visibility of header and footer
  removeSplash=()=>{ this.setState({ splash: false  }); }
  addSplash=()=>{  this.setState({ splash: true  });  }

  componentDidMount(){
    if(localStorage.getItem("bgColor") && localStorage.getItem("color") && localStorage.getItem("opacityColor")){
      this.changeColor(localStorage.getItem("bgColor"),localStorage.getItem("color"),localStorage.getItem("opacityColor"))
    }  
  }

  observerAnimation( classToAdd , allElementWithClass){
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entrie)=>{
            console.log(entrie)
            if(entrie.isIntersecting){
                entrie.target.classList.add(classToAdd)
            }
        })
    })
    allElementWithClass.forEach((e)=> observer.observe(e))
  }

  handleMailtoClick = () => {
    const emailAddress = 'redaredaeskouni@example.com';
    const subject = 'Subject of the email';
    const body = 'Body of the email';

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open the default email client
    window.location.href = mailtoLink;
  };

  render(){
    return(
      <Router>
            <Header 
                asideVisible={this.asideVisible} 
                asideHidden={this.asideHidden} 
                splash={this.state.splash}
                observerAnimation={this.observerAnimation}
            />
            <Aside  
                asideDisplay={this.state.asideDisplay}  
                changeColor={this.changeColor} asideRef={this.asideRef}
            />   
            <Routes>
                <Route path='/' element={<Splash addSplash={this.addSplash} />} /> 
                <Route path='/home' element={<Home 
                      asideHidden={this.asideHidden}  
                      removeSplash={this.removeSplash}
                      observerAnimation={this.observerAnimation} 
                      handleMailtoClick={this.handleMailtoClick}
                    />}
                /> 
                <Route path='/education' element={<Education 
                      asideHidden={this.asideHidden} 
                      removeSplash={this.removeSplash} 
                      observerAnimation={this.observerAnimation} 
                    />} 
                /> 
                <Route path='/projects' element={<Project 
                      asideHidden={this.asideHidden} 
                      removeSplash={this.removeSplash} 
                      observerAnimation={this.observerAnimation}
                    />}
                /> 
                <Route path='/contact-me' element={<ContactMe 
                      asideHidden={this.asideHidden} 
                      removeSplash={this.removeSplash}
                      observerAnimation={this.observerAnimation}
                      domain={this.state.domain}
                      handleMailtoClick={this.handleMailtoClick}
                    />}
                /> 
            </Routes> 
            <Footer splash={this.state.splash} />   
      </Router> 
    )
  }
}



export default App;
