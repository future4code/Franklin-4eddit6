import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '../../components/Button/Button';
import { Post } from '../../components/Post/Post';
import * as S from './styled';
import { TextareaComponent } from '../../components/Textarea/Textarea';
import { BASE_URL } from '../../constants/url';



export const FeedPage = () => {

    const [posts, setPosts] = useState([])
  
        axios.get(`${BASE_URL}/posts`, {
           
            headers: {
                'Authorization': `${localStorage.getItem("token")}`
            }
          })
            .then((response) => {
                setPosts(response.data)
                
            }).catch((error) => {
                console.log(error.response);
            })
    
    
   

    return (
    <S.FeedPageContainer>
        <TextareaComponent placeholder='Escreva seu post...'/>
        <Button text='Postar'/>
        
        <S.PostsContainer>
        <Post 
                userName= 'labaluno83'
                content= 'Porque a maioria dos desenvolvedores usam Linux? Ou as empresas de tecnologia usam Linux?'
                ups='1.2k'
                coments='132'
                />
            {posts.map(item => (
                <>
              
        
            <Post 
            userName= {item.username}
            content= {item.body}
            ups={item.voteSum}
            coments={item.commentCount}
        />
        </>

            ))}
            
        </S.PostsContainer>  
    </S.FeedPageContainer>
    )
}