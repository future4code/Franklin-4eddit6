import React from 'react';
import { Button } from '../../components/Button/Button';
import { Post } from '../../components/Post/Post';
import { FeedPageContainer} from './styled';
import { TextareaComponent } from '../../components/Textarea/Textarea';
import { PostsContainer } from './styled';

export const FeedPage = () => {
    return (
    <FeedPageContainer>
        <TextareaComponent placeholder='Escreva seu post...'/>
        <Button text='Postar'/>
        
        <PostsContainer>
            <Post 
                userName='labaluno83'
                content= 'Porque a maioria dos desenvolvedores usam Linux? Ou as empresas de tecnologia usam Linux?'
                ups='1.2k'
                coments='132'
            />
        </PostsContainer>  
    </FeedPageContainer>
    )
}