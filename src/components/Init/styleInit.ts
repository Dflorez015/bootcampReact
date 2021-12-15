import styled from "styled-components";
import { appear } from "../../style/globalStyle";

export const InitContainer = styled.div`
margin: auto;
padding-top: 8rem;
width: 615px;
height: 93.5vh;
background-image: url(https://www.pikpng.com/pngl/b/116-1162173_background-file-tag-list-svg-hd-photo-clipart.png);
background-repeat: no-repeat, repeat;

//efects
animation: .4s ${appear} linear;

& div {
    transform: rotate(0.2deg);
    & h1 {
      color: darkred;
    }
}
`

export const MainInitContainer = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
overflow-y: scroll;
max-height: 68vh;
height: 68vh;
width: 100%;
::-webkit-scrollbar {
      width: 8px;
}
::-webkit-scrollbar-track {
  background: var(--gray-1);
  border-radius: 8px;
}
::-webkit-scrollbar-thumb {
  background: var(--red-wine);
  border-radius: 8px;
}
`

export const ItemListInit = styled.div`
width: 99%;
border-bottom: 1px solid var(--gray-1);
display: flex;
flex-wrap: nowrap;
& div {
    width: 50%;
}
`