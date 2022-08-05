import React from 'react';
import * as S from './styled';

export const Button = (props) => {
    return(
        <S.GradientButtonContainer onClick={props.onClick1}>
            <S.GradientButton>{props.text}</S.GradientButton>
        </S.GradientButtonContainer>
    )
}