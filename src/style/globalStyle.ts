import styled, { createGlobalStyle, keyframes } from "styled-components"

export const borderRadius = "22px"
export const padding = ".5rem"
export const gap = ".5rem"
const backGroundButtonMain = "#fff"

// keyframes
export const standOutKF = (h: number) => keyframes`
0% {
    opacity: 0;
    max-height: 0px;
}
40%{
    max-height: ${(h * 0.45) + "rem"};
    opacity: .1;
}
60%{
    max-height: ${(h * 0.9) + "rem"};
    opacity: .2;
}
100%{
    max-height:${h + "rem"};
    opacity: 1;
}
`

export const GlobalStyles = createGlobalStyle`

:root {
    --gray-1: #ECECEC
}

*{
    padding: 0px;
    margin: 0px;
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
`

export const MainWrapper = styled.div`
 width: 100vw;
 height: 100vh;
`

