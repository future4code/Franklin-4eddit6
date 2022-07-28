import React from 'react';
import { Button } from '../../components/Button/Button';
import { Post } from '../../components/Post/Post';
import { PostPageContainer, PostsContainer } from './styled';
import { TextareaComponent } from '../../components/Textarea/Textarea';

export const PostPage = () => {
    return (
    <PostPageContainer>
        <PostsContainer>
            <Post 
                userName='labaluno83'
                content= 'Porque a maioria dos desenvolvedores usam Linux? Ou as empresas de tecnologia usam Linux?'
                ups='1.2k'
            />
        </PostsContainer>
        <TextareaComponent placeholder='Adicionar comentário...'/>
        <Button text='Responder'/>
    </PostPageContainer>
    )
}