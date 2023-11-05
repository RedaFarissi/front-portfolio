import "./Aside.sass"
import React from 'react';
import images from "../images";

export default function Aside(props){

  const themes = [    
      {image:images.themeCeil  ,theme: function(){ props.changeColor("#0e6ba8" , "#edf9fe" , "#edf9fe93" ) } ,},
      {image:images.themeMaterialDarkLight ,theme: function(){ props.changeColor("#263238" , "#aeaeae" , "#aeaeae93" ) } ,},
      {image:images.themeBlackLight,theme: function(){ props.changeColor("#E5E5E5" , "#14213d" , "#14213d93" ) } ,},
      {image:images.themeViolletLight ,theme: function(){ props.changeColor("#F8EFF4" , "#231942" , "#000a1293" ) } ,},
      {image:images.themeBlueLight ,theme: function(){ props.changeColor("#EDF9FE" , "#001C55" , "#001C5593" ) } ,},
      {image:images.themeGreenLight,theme: function(){ props.changeColor("#FFFEFD" , "#5D2A42" , "#5D2A4293" ) } ,},
      {image:images.themeRedLight ,theme: function(){ props.changeColor("#FFF8E6" , "#6a040f" , "#6a040f93" ) } ,},
      {image:images.themePinkLight ,theme: function(){ props.changeColor("#FEE9F2" , "#620E34" , "#620E3493" ) } ,},
      {image:images.themeTealLight ,theme: function(){ props.changeColor("#F4EEFC" , "#430A58" , "#430A5893" ) } ,},
      {image:images.themeOrangeLight ,theme: function(){ props.changeColor("#FFF0EA" , "#99401F" , "#99401F93" ) } ,},
      {image:images.themeYellowLight ,theme: function(){ props.changeColor("#FFD95D" , "#5f4339" , "#5f433993" ) } ,},
      {image:images.themeMaterialLight ,theme: function(){ props.changeColor("#ffffff" , "#4c2b91" , "#4c2b9193" ) } ,},
      {image:images.themeMaterialTealLight ,theme: function(){ props.changeColor("#ffffff" , "#05505E" , "#05505E93" ) } ,},
    ] 
    return(
      <aside dir="rtl" style={props.asideDisplay} >
        <h5>Select Theme</h5>
        {
          themes.map(e=>(<>
            <div onClick={e.theme} className="theme-box">
              <img className="w-100" src={e.image}  alt={e.title}/>
            </div> 
            <hr/></>
          ))
        }
      </aside>
    )
}