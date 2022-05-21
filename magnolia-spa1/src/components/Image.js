import React from 'react';


const Image = (props)=>{
    const {image} = props;
    console.log("This is the current Log that I logged",image)
    return(
        <img alt='img' src={image} />
    )
}


export default Image;