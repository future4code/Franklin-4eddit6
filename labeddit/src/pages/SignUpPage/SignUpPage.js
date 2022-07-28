import React from 'react';
import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import { SignUpStyle, BoasVindas, FormStyle, InputStyle, MensagemTermos, MensagemPubli, InputPublicidade, AStyle } from './styled';


export const SignUpPage = () => {
    return (
    <SignUpStyle>
        <Header></Header>
        <BoasVindas>
        <p>Olá, boas vindas ao LabEddit ;) </p>
        </BoasVindas>
    
         <FormStyle>
            <InputStyle
            placeholder="Nome de usuário"
            id="userName"
            type="string"
            name="name"
            />
             <InputStyle
            placeholder="E-mail"
            id="userName"
            type="email"
            name="name"
            />
             <InputStyle
            placeholder="Senha"
            id="userName"
            type="string"
            name="name"
            />
         
        </FormStyle>
        <div>
            <MensagemTermos>Ao continuar, você concorda com o nosso <AStyle href='#contrato'>Contrato de usuário</AStyle> e nossa <AStyle href='#privacidade'>Política de Privacidade</AStyle>.</MensagemTermos>
            <MensagemPubli>
            <label><InputPublicidade
            type='checkbox'/>
            Eu concordo em receber emails sobre coisas legais no Labeddit
            </label>
            </MensagemPubli>
        </div>   
            <Button text= 'Cadastrar'/>
    </SignUpStyle>
    )
}