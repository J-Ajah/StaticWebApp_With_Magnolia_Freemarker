import React from "react";


const Text = (props)=>{
    console.log(props.text);
    return(
        <h2>{props.text}</h2>
    )
}

export default Text;