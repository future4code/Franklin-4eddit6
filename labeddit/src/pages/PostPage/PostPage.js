import React from 'react';
import { Button } from '../../components/Button/Button';
import { Post } from '../../components/Post/Post';
import * as S from './styled';
import { TextareaComponent } from '../../components/Textarea/Textarea';
import { Header } from '../../components/Header/Header';
import { useNavigate } from 'react-router';

export const PostPage = () => {
    const navigate = useNavigate()
    const backToFeed = () => {
        navigate("/feed")
    }
    const logout = () => {
        navigate("/")
    }
    return (
    <S.PostPageContainer>
        <Header
        onClickX = {backToFeed}
        textLogout="X"
        onClick = {logout}
         text="Logout"/>
        <S.PostsContainer>
            <Post 
                userName='labaluno83'
                content= 'Porque a maioria dos desenvolvedores usam Linux? Ou as empresas de tecnologia usam Linux?'
                ups='1.2k'
            />
        </S.PostsContainer>
        <TextareaComponent placeholder='Adicionar comentário...'/>
        <Button 
        text='Responder'/>
    </S.PostPageContainer>
    )
}