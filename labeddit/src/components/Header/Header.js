import React from "react";
import logoLabbedit from '../../assets/logoLabbedit.png'
import * as S from "./styles";

export const Header = () => {
    return(
        <>
        <S.HeaderStyle>
            <S.ImagemWrapper>
            <S.LabEdditImg src={logoLabbedit} alt='logo labEddit'/>
            </S.ImagemWrapper>
            
            <S.ButtonWrapper>
            <S.ButtonHeader>Entrar</S.ButtonHeader>
            </S.ButtonWrapper>
           

        </S.HeaderStyle>
        </>
    )

}