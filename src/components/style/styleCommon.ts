import styled from "styled-components";
import { gap, standOutKF } from "../../style/globalStyle";


export const StyleCard = styled.div`
grid-area: ${({ theme }) => (theme.area ? theme.area : "")};
background-color: white;
width: clamp(40ch, 50%, 75ch);
height: fit-content;
margin: 0px auto;
padding: 1.5rem 2rem;
box-shadow: 0px 3px 6px var(--gray-1);
border-radius: 22px;
display: flex;
flex-direction: column;
gap: ${gap};

//efects
animation: 1s ${standOutKF(10)};


`

export const StyleButton = styled.button`
backGround-color :${({ theme }) => (theme.color)};
color:${({ theme }) => (theme.textC)};
:hover{    
    backGround-color: ${({ theme }) => (theme.colorHover)};
}

`

export const StyleFlex = styled.div`
display: flex;
flex-direction: ${({theme}) => (theme.direction)};
gap: ${({theme}) => (theme.gap)};
width: ${({theme}) => (theme.width)};
justify-content: ${({theme}) => (theme.justifyC)};

`

export const StyleH1 = styled.h1`
text-align: ${({theme}) => (theme.direction)};
`

