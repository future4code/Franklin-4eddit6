import React from "react";
import logoLabbedit from '../../assets/logoLabbedit.png'
import { HeaderStyle, LabEdditImg, ButtonHeader } from "./styles";

export const Header = () => {
    return(
        <>
        <HeaderStyle>
            <LabEdditImg src={logoLabbedit} alt='logo labEddit'/>
            <ButtonHeader>Entrar</ButtonHeader>

        </HeaderStyle>
        </>
    )

}