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
      Asidedisplay: {visibility: "hidden"} , 
    }
  }
  asideVisible =(event)=>{
    this.setState( prevState => ({...prevState , Asidedisplay:{visibility: "visible"} }) )
    event.stopPropagation();
  }
  asideHidden =()=>{
    this.setState( prevState => ({...prevState , Asidedisplay:{visibility: "hidden"} }) )
  }

  render(){
    return(
      <Router >
          <Header asideVisible={this.asideVisible} asideHidden={this.asideHidden} />
          <Aside Asidedisplay={this.state.Asidedisplay}  />      
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
