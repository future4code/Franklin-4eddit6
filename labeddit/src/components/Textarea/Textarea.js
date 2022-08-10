import React from 'react';
import axios from "axios"
import { Button } from '../../components/Button/Button';
import { BASE_URL } from '../../constants/url';
import * as S from './styled';
import useForm from '../../hooks/useForm';

export const TextareaComponent = (props) => {

  const [form, onChange, clear] = useForm({title: "post", body: ""})
     
  const submitPost = () => {
    props.setIsPosted(false)
      axios.post(`${BASE_URL}/posts`, form, {
        headers: {
            'Authorization': `${localStorage.getItem("token")}`
        },
        
      })
          .then((response) => {
              clear()          
              props.setIsPosted(true)
              alert("postado", form)
          }).catch((error) => {
                props.setIsPosted(false)
              console.log(error.response);
              alert("erro")
          })
      };

      const onSubmitPost = (event) => {
          event.preventDefault()
          submitPost(form, clear)
      }

    return (
        <>
    
         <S.PostForm onSubmit={onSubmitPost}>
            <S.Textarea
            required
            autoFocus
            placeholder={props.placeholder}
            id="body"
            name="body"
            autoComplete="body"
            onChange={onChange}
            value={form.body}
            />
    
            <Button 
            type="submit"
            text = {props.text}
            />
        </S.PostForm>
    </>
    )
}