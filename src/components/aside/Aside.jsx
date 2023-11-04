import "./Aside.sass"
import React from 'react';
import images from "../images";

export default function Education(props){
    const themes = [
      {image: images.themeCeil , title: "Blue Shape"},
      {image: images.themeBrown , title: "Brown Shape"},
      {image: images.themeDanger , title: "Red Shape"},
      {image: images.themeWarning , title: "Yellow Shape"},
      {image: images.themeSuccess , title: "Green Shape"},
      {image: images.themeDark , title: "Dark Shape"},
      {image: images.themeLight , title: "Light Shape"},
    ]
    
    return(
      <aside dir="rtl" style={props.Asidedisplay} >
        <h5>Select Theme</h5>
        {
          themes.map(e=>(
            <div className="theme-box">
              <img className="w-100" src={e.image}  alt={e.title}/>
              <h6> {e.title} </h6>
              <hr/>
            </div> 
            
          ))
        }
      </aside>
    )
}