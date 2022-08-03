import React from "react";
import * as S from "./styled";

export const TextareaComponent = (props) => {
    return(
        <S.Textarea placeholder={props.placeholder}/>
    )
}