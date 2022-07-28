import React from 'react';
import { PostContainer, UserName, Buttons, Content, InteractionButton, Ups, Arrows } from './styled';
import {TbArrowBigTop, TbArrowBigDown, TbMessageDots} from 'react-icons/tb'

export const Post = (props) => {
    return(
        <PostContainer>
            <UserName>Enviado por: {props.userName}</UserName>
            <Content>{props.content}</Content>
            <Buttons>
                <Arrows>
                    <InteractionButton><TbArrowBigTop/></InteractionButton>
                    <Ups>{props.ups}</Ups>
                    <InteractionButton><TbArrowBigDown/></InteractionButton>
                </Arrows>
                <Arrows>
                    <InteractionButton><TbMessageDots/></InteractionButton>
                    <Ups>{props.coments}</Ups>
                </Arrows>
            </Buttons>
        </PostContainer>
    )
}