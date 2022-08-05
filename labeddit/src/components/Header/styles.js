import styled from "styled-components";

export const HeaderStyle = styled.header`
width: 90%;
height: 50px;
background-color: #EDEDED;
display: flex;
align-items: center;
margin-bottom: 10px;

@media (min-width: 500px) {
    width: 500px;
    margin: 10px 5%;
  }
`
export const ImagemWrapper = styled.div`

width: 59%;
display: flex;
justify-content: end;
`

export const LabEdditImg = styled.img`
height: 28px;

`
export const ButtonWrapper = styled.div`

width: 50%;
display: flex;
justify-content: end;

`

export const ButtonHeaderBack = styled.button`
font-size: 18px;
font-weight: 600;
font-family: Noto Sans, sans-serif;
color: gray;
border: 0;
margin-left: 10px;

`

export const ButtonHeader = styled.button`
font-size: 18px;
font-weight: 600;
font-family: Noto Sans, sans-serif;
color: #4088CB;
border: 0;
margin-right: 5px;


`