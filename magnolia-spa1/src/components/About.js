import React from "react";
import parser from "html-react-parser";
import { magnoliaUrl } from "../public/config";

const About = (props)=>{
    const {title, aboutTitle, info, image} = props;

    return(
        <div class="about" id="About">
        <div class="about-infoContainer">  
          <div class="about-infoContent">            
              <h2 class="about-title">{aboutTitle}</h2>            
              <p class="about-details">{parser(info)}</p>
          </div>
        </div>
        <div class="about-imageContainer"> 
            <img src={`${magnoliaUrl}${image['@link']}`} class="about-img"/>
        </div>
      </div>
    )

}

export default About;