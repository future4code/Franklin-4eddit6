import React from 'react';
import { GradientButton } from './styled';

export const Button = (props) => {
    return(
        <GradientButton>{props.text}</GradientButton>
    )
}