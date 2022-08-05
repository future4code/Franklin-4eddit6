import React from 'react';
import logo from '../../assets/logo-labeddit.png';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../constants/url';
import useForm from '../../hooks/useForm';

export const LoginPage = () => {

    const [form, onChange, clear] = useForm({email: "", password: ""})
    const navigate = useNavigate()
    
    const goToFeedPage = () => {
        navigate("/feed")
    }

    const goToSignUpPage = () => {
        navigate("/cadastro")
    }
       
    const submitLogin = () => {
        axios.post(`${BASE_URL}/users/login`, form)
            .then((response) => {
                localStorage.setItem('token', response.data.token);
                clear()
                goToFeedPage(navigate)
            }).catch((error) => {
                console.log(error.response);
            })
        };

        const onSubmitForm = (event) => {
            event.preventDefault()
        }

    return (
    <S.LoginContainer>
        <S.LabImg src={logo} alt="logo"/>
        <S.LabTitle>LabEddit</S.LabTitle>
        <S.LabSubTitle>O projeto de rede social da Labenu</S.LabSubTitle>
            <S.LabForm onSubmit={onSubmitForm}>
                <S.InputLogin
                 type="email" 
                 name={"email"} 
                 placeholder="Email" 
                 value={form.email} 
                 onChange={onChange}
                 />
                <S.InputLogin 
                type="password" 
                name={"password"} 
                placeholder="Senha" 
                value={form.password} 
                onChange={onChange}
                />
                <S.Button onClick={submitLogin}>Continuar</S.Button>
                <S.Line/>
                <S.ButtonGoToSignUp onClick={goToSignUpPage}>Crie uma conta!</S.ButtonGoToSignUp>   
            </S.LabForm>
    </S.LoginContainer>
    )
}