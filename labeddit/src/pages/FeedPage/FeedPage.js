import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Post } from '../../components/Post/Post';
import * as S from './styled';
import { BASE_URL } from '../../constants/url';
import { Header } from '../../components/Header/Header';
import { useNavigate } from 'react-router';
import { TextareaComponent } from '../../components/Textarea/Textarea';

export const FeedPage = () => {

    const [posts, setPosts] = useState([])
    
    const [isPosted, setIsPosted] = useState(false)

    const getPost = () => {
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

    }
  

    const navigate = useNavigate()
    const logout = () => {
        console.log("sair")
        localStorage.removeItem("token")
        navigate("/")
     }
     useEffect(( ) => {
        getPost()
     }, [
        isPosted
     ])

    return (
    <S.FeedPageContainer>
        <Header 
        onClick ={logout}
        text="Logout"/>
        <TextareaComponent
        text = "Postar"
         setIsPosted = {setIsPosted}
         placeholder='Escreva seu post...'/>
        
        
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