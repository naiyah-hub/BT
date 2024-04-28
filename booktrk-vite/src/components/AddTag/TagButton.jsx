import React, {useState} from "react";
import styled from "styled-components";

const theme = {
    black:{
        default: '#000000',
        hover: '#515050',
    }
}



const TagButton = ({type, variant, className, id, onClick, children})=>{
    return <button 
        type={type ? type: "button"}
        variant={variant}
        className={className ? 'btn-component ${classname}' : "btn-component"}
        id={id}
        onClick={onClick}
        >
        {children}
    </button>
}
export default TagButton