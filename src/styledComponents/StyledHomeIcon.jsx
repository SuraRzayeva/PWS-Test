import Styled from 'styled-components'
import { black, white, bgColor, detailColor } from './GlobalStyle'
export const StyledHomeIcon = Styled.div`

*:active, *:focus {
  outline: none;
}

width: 40px;
height: 20px;
z-index: 100;
position: absolute;
top: 3%;
left: 3%;
display: flex;
flex-direction: column;
cursor: pointer;
transition: 0.5s ease all;

img {
  width: 100%;
}


@media screen and (max-width: 1200px) {
    width: 50px;
}

@media screen and (min-width: 800px) {
  position: fixed;
}

@media screen and (max-width: 420px) {
  position: absolute;
  width: 35px;
  left: 7%;
}

@media (pointer:coarse) {
  cursor: default;

  a {
    cursor: default;
  }
}

`
