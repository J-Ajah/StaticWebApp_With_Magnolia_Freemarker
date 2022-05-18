import React from 'react';


const Image = (props)=>{
    const {image} = props;
    return(
        <img alt='img' src={image} />
    )
}


export default Image;