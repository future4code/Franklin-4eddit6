import React from 'react';
import { Button } from '../../components/Button/Button';
import { Post } from '../../components/Post/Post';
import { PostPageContainer, Textarea } from './styled';

export const PostPage = () => {
    return (
    <PostPageContainer>
        <Textarea placeholder='Escreva seu post...'/>
        <Button text='Postar'/>
        <Post 
            userName='labaluno83'
            content= 'Porque a maioria dos desenvolvedores usam Linux? Ou as empresas de tecnologia usam Linux?'
            ups='1.2k'
        />
    </PostPageContainer>
    )
}