import Styled from 'styled-components'
import { black, white, detailColor, shadow1 } from './GlobalStyle'

export const StyledUp = Styled.div`

width: 30px;
height: 30px;
background: ${black};
color: ${white};
border-radius: 5px;
box-shadow: 0 0 5px ${shadow1};
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


@media screen and (max-width: 430px) {
width: 27px;
height: 27px;
}


@media (pointer:coarse) {
  cursor: default;
}

`
