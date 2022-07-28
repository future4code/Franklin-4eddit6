import styled from 'styled-components';

export const LoginContainer = styled.div `
display: flex;
flex-direction: column;
align-items: center;
margin: 4em auto;
` 

export const LabImg = styled.img `
max-width: 10vh;
`

export const LabTitle = styled.h1 `
font-family: 'IBM Plex Sans';
font-weight: 700;
font-size: 36px;
margin: 1px;
`

export const LabSubTitle = styled.h2 `
font-family: 'IBM Plex Sans';
font-weight: 300;
font-size: 16px;
margin: 1px;
`
export const LabForm = styled.form `
display: flex;
flex-direction: column;
margin: 5rem;
gap: 1em;
`

export const InputLogin = styled.input `
height: 60px;
width: 345px;
left: 0px;
top: 0px;
border-radius: 4px;
border: 1px solid #D5D8DE;
linear-gradient(0deg, #FFFFFF, #FFFFFF);
font-family: Noto Sans;
font-size: 16px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
padding-left: 1rem;
`

export const Button = styled.button `
font-family: Noto Sans;
font-size: 18px;
font-weight: 700;
line-height: 25px;
color: #FFFFFF;
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
height: 51px;
border: none;
border-radius: 27px;
padding: 13px, 133px, 13px, 133px;
cursor: pointer;
box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
margin-top: 2.5rem;
`

export const ButtonGoToSignUp = styled.button `
font-family: Noto Sans;
font-size: 18px;
font-weight: 700;
line-height: 25px;
color: #FE7E02;
background-color: #f7f7f7;
height: 51px;
border: none;
border-radius: 27px;
padding: 13px, 133px, 13px, 133px;
cursor: pointer;
box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
`
export const Line = styled.hr`
height: 0.5px;
width: 22rem;
left: 33px;
top: 656px;
background: linear-gradient(90deg,#FF6489 0%,#F9B24E 100%);
border: 1px solid;
border-image-source: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
`
