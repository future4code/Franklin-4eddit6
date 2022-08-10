import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Post } from '../../components/Post/Post';
import { BASE_URL } from '../../constants/url';
import { Header } from '../../components/Header/Header';
import { useNavigate } from 'react-router';
import { TextareaComponent } from '../../components/Textarea/Textarea';
import * as S from './styled';

export const FeedPage = () => {

    const [posts, setPosts] = useState([])
    
    const [isPosted, setIsPosted] = useState(false)
    const [loading, setLoading] = useState(true)

    const getPost = () => {
        
        axios.get(`${BASE_URL}/posts`, {
           
            headers: {
                'Authorization': `${localStorage.getItem("token")}`
            }
        })
        .then((response) => {
            setPosts(response.data)
            setLoading(false)
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

    const goToComment = (idPost) => {
        console.log("goToComment", idPost)
        if(!idPost)  return
        navigate(`/post/${idPost}`)
    }

    return (
    <S.FeedPageContainer>
        <Header 
            onClick ={logout}
            text="Logout"
        />
        <TextareaComponent
            text = "Postar"
            setIsPosted = {setIsPosted}
            placeholder='Escreva seu post...'
        />         
        <S.PostsContainer>
            {loading ? (
                <p>carregando...</p>
            ) : (
 
            posts.map(item => (   
                <Post 
                    goToComment={() => goToComment(item.id)}
                    key={item.id}
                    id={item.id}
                    userName= {item.username}
                    content= {item.body}
                    ups={item.voteSum}
                    comments={item.commentCount}
                />           
            ))
        )}          
        </S.PostsContainer>  
    </S.FeedPageContainer>
    )
}