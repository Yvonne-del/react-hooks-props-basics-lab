import React from "react";
import Links from "./Links";

function About(prop) {
  function showBio(){
    if(!prop.bio){
      return null;
    }else{
      return(
        <p>{prop.bio}</p>
      )
    }
  }
  
  return (
    <div id="about">
      <h2>About Me</h2>
      {showBio()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={prop.git} linkedin={prop.linkedin}/>
    </div>
  );
}

export default About;
