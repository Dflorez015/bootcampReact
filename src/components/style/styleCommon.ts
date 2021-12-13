import styled from "styled-components";
import { gap, padding, standOutKF } from "../../style/globalStyle";


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
animation: 1s ${standOutKF(15)} ease-in-out;
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
flex-direction: ${({ theme }) => (theme.direction)};
gap: ${({ theme }) => (theme.gap)};
width: ${({ theme }) => (theme.width)};
justify-content: ${({ theme }) => (theme.justifyC)};
align-items: center;
`

export const StyleUl = styled.ul`
display: flex;
justify-content: center;
width: 100%;
margin-bottom: ${gap};
& li {
    list-style: none;
    margin: ${gap};
}
`

export const StyleH1 = styled.h1`
text-align: ${({ theme }) => (theme.direction)};
`

export const StyleForm = styled.form`
display: grid;
grid-template-areas: ${({ theme }) => (theme.areas)};
grid-gap: ${gap};
`

export const StyleFlexFormRow = styled(StyleFlex)`
grid-area: ${({ theme }) => (theme.area)};
height: fit-content;
& label {
    width: ${({ theme }) => (theme.lwidth)};
    padding: 5px ${padding};
    font-size: 1rem;
}
& input {
    width: ${({ theme }) => (theme.iwidth)};
    padding: 5px ${padding};    
}
`

export const StyleInput = styled.input`
border: 1px solid var(--hover-txt);
border-radius: 22px;   
font-size: 1rem; 
max-height: 24px;
:focus{
    outline: none !important;
    border-color: blue;
}
`