import React from "react";
import { Textarea } from "./styled";

export const TextareaComponent = (props) => {
    return(
        <Textarea placeholder={props.placeholder}/>
    )
}