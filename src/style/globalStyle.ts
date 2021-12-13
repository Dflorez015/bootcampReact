import styled, { createGlobalStyle, keyframes } from "styled-components"

export const borderRadius = "22px"
export const padding = ".5rem"
export const gap = ".5rem"
const backGroundButtonMain = "#fff"

// keyframes
export const standOutKF = (h: number) => keyframes`
0% {
    opacity: .01;
    max-height: 0px;
}
40%{
    max-height: ${h + "rem"};
    opacity: .1;
}
60%{
    max-height: ${h + "rem"};
    opacity: .3;
}
100%{
    max-height:${h + "rem"};
    opacity: 1;
}
`

export const GlobalStyles = createGlobalStyle`

:root {
    --gray-1: #ECECEC;
    --hover-txt: #b3afaf;
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
 }

`

export const MainWrapper = styled.div`
 height: 100%;
 width: 100%;
`
export const AppWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
width: 100%;
height: 100%;

`
