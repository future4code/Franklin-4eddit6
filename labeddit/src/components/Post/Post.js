import React from 'react';
import * as S from './styled';
import {TbArrowBigTop, TbArrowBigDown, TbMessageDots} from 'react-icons/tb'
import { useNavigate } from 'react-router';

export const Post = (props) => {

    const navigate = useNavigate()
    const goToComment = () => {
        navigate("/post")
    }
    return(
        <S.PostContainer>
            <S.UserName>Enviado por: {props.userName}</S.UserName>
            <S.Content>{props.content}</S.Content>
            <S.Buttons>
                <S.Arrows>
                    <S.InteractionButton><TbArrowBigTop/></S.InteractionButton>
                    <S.Ups>{props.ups}</S.Ups>
                    <S.InteractionButton><TbArrowBigDown/></S.InteractionButton>
                </S.Arrows>
                <S.Arrows>
                    <S.InteractionButton onClick={goToComment}><TbMessageDots/></S.InteractionButton>
                    <S.Ups>{props.coments}</S.Ups>
                </S.Arrows>
            </S.Buttons>
        </S.PostContainer>
    )
}