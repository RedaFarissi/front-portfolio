import "./Aside.sass"
import React from 'react';
import images from "../images";

export default function Aside(props){

  const themes = [    
      {key:1 ,image:images.themeCeil  , theme: function(){ props.changeColor("#0e6ba8" , "#edf9fe" , "#edf9fe93" ) } ,},
      {key:2 ,image:images.themeMaterialDarkLight , theme: function(){ props.changeColor("#263238" , "#aeaeae" , "#aeaeae93" ) } ,},
      {key:7 ,image:images.themeRedLight , theme: function(){ props.changeColor("#FFF8E6" , "#6a040f" , "#6a040f93" ) } ,},
      {key:4 ,image:images.themeViolletLight , theme: function(){ props.changeColor("#F8EFF4" , "#231942" , "#000a1293" ) } ,},
      {key:5 ,image:images.themeBlueLight , theme: function(){ props.changeColor("#EDF9FE" , "#001C55" , "#001C5593" ) } ,},
      {key:8 ,image:images.themePinkLight , theme: function(){ props.changeColor("#FEE9F2" , "#620E34" , "#620E3493" ) } ,},
      {key:10 ,image:images.themeOrangeLight , theme: function(){ props.changeColor("#FFF0EA" , "#99401F" , "#99401F93" ) } ,},
      {key:11 ,image:images.themeTealLight , theme: function(){ props.changeColor("#F4EEFC" , "#430A58" , "#430A5893" ) } ,},
      {key:12 ,image:images.themeYellowLight , theme: function(){ props.changeColor("#FFD95D" , "#5f4339" , "#5f433993" ) } ,},
    ] 
    return(
      <aside dir="rtl" style={props.asideDisplay} >
        <h5>Select Theme</h5>
        {
          themes.map(e => (
            <React.Fragment key={e.key}>
              <div onClick={e.theme} className="theme-box">
                <img className="w-100" src={e.image} alt={e.title} />
              </div>
              <hr />
            </React.Fragment>
          ))
        }
      </aside>
    )
}