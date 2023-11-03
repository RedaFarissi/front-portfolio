import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import { 
  Header , Aside , Footer , ToTest , Home , Education , Project , ContactMe
} from './components/path';
import './App.sass';

function App() {
  return (
  <Router>
    <Header  />
    {/* <Aside /> */}
  
      <Routes>
        <Route path='/all-image' element={<ToTest />} /> 
        <Route path='/home' element={<Home />} /> 
        <Route path='/education' element={<Education />} /> 
        <Route path='/projects' element={<Project />} /> 
        <Route path='/contact-me' element={<ContactMe />} /> 
      </Routes>  
    
    <Footer />
  </Router>  
  );
}

export default App;
