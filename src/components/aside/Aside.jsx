import "./Aside.sass"
import React from 'react';
import images from "../images";

export default function Aside(props){
    const changeColor = (bgColor,color,opacityColor)=>{
      document.documentElement.style.setProperty('--bg-color', bgColor);
      document.documentElement.style.setProperty('--text-color', color);
      document.documentElement.style.setProperty('--text-color-opacity', opacityColor);
    }






    const themes = [    
      {theme: function(){ changeColor("#F8EFF4" , "#231942" , "#000a1293" ) } , image:images.themeViolletLight , title: "Viollet Light Theme"},
      {theme: function(){ changeColor("#EDF9FE" , "#001C55" , "#001C5593" ) } , image:images.themeBlueLight , title: "Blue Light Theme"},
      {theme: function(){ changeColor("#FFFEFD" , "#5D2A42" , "#5D2A4293" ) } , image:images.themeGreenLight , title: "Green Light Theme"},
      {theme: function(){ changeColor("#FFF8E6" , "#6a040f" , "#6a040f93" ) } , image:images.themeRedLight, title: "Red Light Theme"},
      {theme: function(){ changeColor("#E5E5E5" , "#14213d" , "#14213d93" ) } , image:images.themeBlackLight , title: "Black Light Theme"},
      {theme: function(){ changeColor("#FEE9F2" , "#620E34" , "#620E3493" ) } , image:images.themePinkLight , title: "Pink Light Theme"},
      {theme: function(){ changeColor("#F4EEFC" , "#430A58" , "#430A5893" ) } , image:images.themeTealLight , title: "Teal Light Theme"},
      {theme: function(){ changeColor("#FFF0EA" , "#99401F" , "#99401F93" ) } , image:images.themeOrangeLight , title: "Orange Light Theme"},
      {theme: function(){ changeColor("#FFD95D" , "#5f4339" , "#5f433993" ) } , image:images.themeYellowLight , title: "Yellow Light Theme"},
      {theme: function(){ changeColor("#263238" , "#aeaeae" , "#aeaeae93" ) } , image:images.themeMaterialDarkLight , title: "Material Dark Theme"},
      {theme: function(){ changeColor("#ffffff" , "#4c2b91" , "#4c2b9193" ) } , image:images.themeMaterialLight , title: "Material Light Theme"},
      {theme: function(){ changeColor("#ffffff" , "#05505E" , "#05505E93" ) } , image:images.themeMaterialTealLight , title: "Material Teal Theme"},
      {theme: function(){ changeColor("#0e6ba8" , "#edf9fe" , "#edf9fe93" )}  , image:images.themeCeil ,  title: "Blue Shape"},
      {theme: function(){ changeColor("#dc3545" , "#edf9fe" , "#edf9fe93" ) } , image:images.themeDanger ,title: "Red Shape"},
      {theme: function(){ changeColor("#198754" , "#edf9fe" , "#edf9fe93" ) } , image:images.themeSuccess,title: "Green Shape"},
      {theme: function(){ changeColor("#212529" , "#edf9fe" , "#edf9fe93" ) } , image:images.themeDark ,  title: "Dark Shape"},
      {theme: function(){ changeColor("#1f0039" , "#edf9fe" , "#edf9fe93" ) } , image:images.themeViollet , title: "Light Shape"},
      {theme: function(){ changeColor("#edf9fe" , "#212529" , "#21252993" ) } , image:images.themeLight , title: "Light Shape"},
    ] 
    return(
      <aside dir="rtl" style={props.asideDisplay} >
        <h5>Select Theme</h5>
        {
          themes.map(e=>(
            <div onClick={e.theme} className="theme-box">
              <img className="w-100" src={e.image}  alt={e.title}/>
              <h6> {e.title} </h6>
              <hr/>
            </div> 
            
          ))
        }
      </aside>
    )
}