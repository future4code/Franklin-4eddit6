import React from 'react';
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import { BASE_URL } from '../../constants/url';
import * as S from './styled';
import useForm from '../../hooks/useForm';


export const SignUpPage = () => {

  const [form, onChange, clear] = useForm({username: "", email: "", password: ""})
  const navigate = useNavigate()
  
  const goToFeedPage = () => {
      navigate("/feed")
  }

     
  const submitSignUp = () => {
      axios.post(`${BASE_URL}/users/signup`, form)
          .then((response) => {
              localStorage.setItem('token', response.data.token);
              clear()
              goToFeedPage(navigate)
              console.log("hello")
          }).catch((error) => {
              console.log(error.response);
              console.log("hello catch")
          })
      };

      const onSubmitSignUp = (event) => {
          event.preventDefault()
          submitSignUp(form, clear, navigate)
      }
//   
    return (
    <S.SignUpStyle>
        <Header></Header>
        <S.BoasVindas>
        <p>Olá, boas vindas ao LabEddit ;) </p>
        </S.BoasVindas>
    
         <S.FormStyle onSubmit={onSubmitSignUp}>
            <S.InputStyle
            required
            autoFocus
            placeholder="Nome de usuário"
            id="username"
            name="username"
            autoComplete="username"
            onChange={onChange}
            value={form.username}
            />
             <S.InputStyle
             required
            placeholder="E-mail"
            id="email"
            name="email"
            autoComplete="email"
            onChange={onChange}
            value={form.email}
            />
             <S.InputStyle
             required
            placeholder="Senha"
            id="password"
            type="password"
            name="password"
            onChange={onChange}
            value={form.password}
            />
         
        
        <div>
            <S.MensagemTermos>Ao continuar, você concorda com o nosso <S.AStyle href='#contrato'>Contrato de usuário</S.AStyle> e nossa <S.AStyle href='#privacidade'>Política de Privacidade</S.AStyle>.</S.MensagemTermos>
            <S.MensagemPubli>
            <label><S.InputPublicidade
            type='checkbox'/>
            Eu concordo em receber emails sobre coisas legais no Labeddit
            </label>
            </S.MensagemPubli>
        </div>   
            <Button 
            onClick={submitSignUp}
            type="submit"
            text= 'Cadastrar'/>
            </S.FormStyle>
    </S.SignUpStyle>
    )
}