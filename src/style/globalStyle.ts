import styled, { createGlobalStyle, keyframes } from "styled-components"

export const borderRadius = "22px"
export const padding = ".5rem"
export const gap = ".5rem"
export const marg_left = "8rem" // x100 gap + ajuste
const backGroundButtonMain = "#fff"

// keyframes
export const standOutKF = keyframes`
0% {
    max-height: 0px;    
}
40%{
    max-height: 20%;    
}
60%{
    max-height: 40%;    
}
80%{
    max-height: 80%;    
}
100%{
    max-height: 100%;    
}
`
export const appear = keyframes`
from{
    opacity: 0;
}to{
    opacity: 1;
}
`

export const GlobalStyles = createGlobalStyle`

:root {
    --gray-1: #ECECEC;
    --hover-txt: #b3afaf;
    --pink-1: #f8d7da;
    --pink-2: #f5c6cb;
    --red-wine: #be1e37;
}

*{
    padding: 0px;
    margin: 0px;
}

#root {
    width: 100vw;
    height: 100vh;
}

& button {
    width: fit-content;
    border: none;    
    border-radius: ${borderRadius};
    backGround-color: ${backGroundButtonMain};
    padding: ${padding};
    box-shadow: none;
    transition: backGround-color .2s ease-in-out,
        box-shadow .3s ease-in-out;
    //effects
    :hover{       
        cursor: pointer;
        box-shadow: 0px 3px 6px #00000029;
    }
}

& a {
    text-decoration: none;
    text-align: center;
    color: black;
    transition: color .2s ease-in-out;
    padding: ${gap};
    :hover {
        color: var(--hover-txt);
    }    
}

& .active {
     background-color: var(--gray-1);
     border-radius: 10px 10px 0px 0px;
 }

`

export const MainWrapper = styled.div`
 height: 100%;
 width: 100%;
 overflow-y: hidden;
`
export const AppWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
width: 100%;
height: 100%;

& input[type=number]::-webkit-inner-spin-button, 
 input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}

& input[type=number] { -moz-appearance:textfield; }

`
