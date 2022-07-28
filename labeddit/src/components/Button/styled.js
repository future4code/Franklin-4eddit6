import styled from "styled-components";

export const GradientButtonContainer = styled.div`
    width: 90%;
    padding: 1rem 0;
    box-sizing: border-box;
    border-bottom: 2px solid transparent;
    border-image: linear-gradient(90deg, #FF6489, #F9B24E);
    border-image-slice: 1;
`

export const GradientButton = styled.button`
    width: 100%;
    height: 3rem;
    border-radius: 12px;
    border: none;
    color: white;
    font-family: 'Noto Sans', sans-serif;
    font-weight: bold;
    background-image: linear-gradient(90deg, #FF6489, #F9B24E);
`