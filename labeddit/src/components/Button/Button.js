import React from 'react';
import * as S from './styled';

export const Button = (props) => {
    return(
        <S.GradientButtonContainer>
            <S.GradientButton>{props.text}</S.GradientButton>
        </S.GradientButtonContainer>
    )
}