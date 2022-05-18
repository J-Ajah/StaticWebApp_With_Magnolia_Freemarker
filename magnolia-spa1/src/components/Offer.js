import React from "react";
import parser from "html-react-parser";


const Offer = (props)=>{

    const {title, offerTitle,info,image} = props;

    const bg = {
        backgroundColor: '#F8F8F8'
    }

    return(
        <div class="about offer" id="Services" style={bg}>
            <div class="about-imageContainer "> 
                <img src={`http://localhost:8080${image["@link"]}`} class="about-img move"/>
            </div>
            <div class="about-infoContainer">  
                <div class="about-infoContent offer-details">
                    <h2 class="about-title">{offerTitle}</h2>
                    <p class="about-details">{parser(info)}</p>
                </div>
            </div>
        </div>
    )
}

export default Offer;