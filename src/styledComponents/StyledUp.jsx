import Styled from 'styled-components'
import { black, white, detailColor } from './GlobalStyle'

export const StyledUp = Styled.div`

width: 35px;
height: 35px;
background: ${black};
color: ${white};
border-radius: 50%;
display: flex;
justify-content: center;
margin-bottom: 20px;
cursor: pointer;
transition: 0.5s ease all;

img {
  width: 50%;
}

:hover {
  background: ${detailColor};
}

@media (pointer:coarse) {
  cursor: default;
}



`
