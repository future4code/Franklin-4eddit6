import React from 'react';
import { GradientButton, GradientButtonContainer } from './styled';

export const Button = (props) => {
    return(
        <GradientButtonContainer>
            <GradientButton>{props.text}</GradientButton>
        </GradientButtonContainer>
    )
}