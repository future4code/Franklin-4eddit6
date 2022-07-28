import React from 'react';
import logo from '../../assets/logo-labeddit.png';
import {LoginContainer, LabImg, LabTitle, LabSubTitle, LabForm, InputLogin, Button, ButtonGoToSignUp, Line} from './styled';
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
    <LoginContainer>
        <LabImg src={logo} alt="logo"/>
        <LabTitle>LabEddit</LabTitle>
        <LabSubTitle>O projeto de rede social da Labenu</LabSubTitle>
            <LabForm onSubmit={onSubmitForm}>
                <InputLogin type="email" name={"email"} placeholder="Email" value={form.email} onChange={onChange}/>
                <InputLogin type="password" name={"password"} placeholder="Senha" value={form.password} onChange={onChange}/>
                <Button onClick={submitLogin}>Continuar</Button>
                <Line/>
                <ButtonGoToSignUp onClick={goToSignUpPage}>Crie uma conta!</ButtonGoToSignUp>   
            </LabForm>
    </LoginContainer>
    )
}