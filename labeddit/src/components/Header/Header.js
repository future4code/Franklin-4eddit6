import React from "react";
import logoLabbedit from '../../assets/logoLabbedit.png'
import * as S from "./styles";

export const Header = (props) => {
    return(
        <>
        <S.HeaderStyle>
        <S.ButtonHeaderBack onClick={props.onClickX}>
                {props.textLogout}</S.ButtonHeaderBack>
            <S.ImagemWrapper>
            <S.LabEdditImg src={logoLabbedit} alt='logo labEddit'/>
            </S.ImagemWrapper>
            
            <S.ButtonWrapper>
            <S.ButtonHeader onClick={props.onClick}>
                {props.text}</S.ButtonHeader>
            </S.ButtonWrapper>
           

        </S.HeaderStyle>
        </>
    )

}