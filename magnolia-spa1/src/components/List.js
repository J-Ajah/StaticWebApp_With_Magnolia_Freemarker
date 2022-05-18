import React from "react";
import { EditableArea } from '@magnolia/react-editor';


const List = (props)=>{
    const {list} = props;
    return(
        <ul> {list && <EditableArea content={list} />}</ul>
    )
}

export default List;