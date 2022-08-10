import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Post } from '../../components/Post/Post';
import { TextareaComponent } from '../../components/Textarea/Textarea';
import { Header } from '../../components/Header/Header';
import { useNavigate, useLocation } from 'react-router';
import { BASE_URL } from '../../constants/url';
import * as S from './styled';

export const PostPage = () => {
    const [comments, setComments] = useState([])
    
    const idComment = "2ebe53ef-db59-4a5b-8b5b-25c5dda57c20"
    axios.get(`${BASE_URL}/posts/${idComment}/comments`, {
    
        headers: {
            'Authorization': `${localStorage.getItem("token")}`
        }
    })
    .then((response) => {
        setComments(response.data)
    
    }).catch((error) => {
        console.log(error.response);
    })

    const navigate = useNavigate()
    const location = useLocation()

    const backToFeed = () => {
        navigate("/feed")
    }
    const logout = () => {
        localStorage.clear()
        navigate("/")
    }

    useEffect(() => {
        if(location.pathname) return  
        const getIdPost = location.pathname
        console.log("getIdPost", getIdPost)
    })

    return (
    <S.PostPageContainer>
        <Header
            onClickX = {backToFeed}
            textLogout="X"
            onClick = {logout}
            text="Logout"
         />
        <TextareaComponent 
            text='Responder'placeholder='Adicionar comentário...'
        />
         
         <S.PostsContainer>
            {
 
            comments.map(item => (   
        
                <Post 
                   
                    key={item.id}
                    id={item.id}
                    userName= {item.username}
                    content= {item.body}
                    ups={item.voteSum}
                    coments={item.commentCount}
                />           
            ))
        }
        </S.PostsContainer>
        
       
    </S.PostPageContainer>
    )
}