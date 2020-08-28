import Styled from 'styled-components'
import { black, detailColor } from './GlobalStyle'

export const StyledBurgerMenu = Styled.div`
*:active, *:focus {
  outline: none;
}
width: 40px;
height: 25px;
z-index: 100;
position: absolute;
top: 5%;
right: 3%;
display: flex;
flex-direction: column;
cursor: pointer;
overflow: hidden;
transition: 0.5s ease all;

.line {
  width: 100%;
  height: 6px;
  background: ${black};
  margin: 2px 0;
  border-radius: 50px;
  transition: .3s ease all;
}

.line-2 {
  width: 60%;
  align-self: flex-end;
}

:hover .line {
  background: ${detailColor};
}


@media screen and (max-width: 1200px) {
  width: 40px;
  height: 30px;

  .line {
    height: 6px;
  }
}


@media screen and (min-width: 800px) {
  position: fixed;
}


@media screen and (max-width: 420px) {
  position: absolute;
  right: 7%;
  top: 4%;
  width: 38px;

}

@media (pointer:coarse) {
  cursor: default;
}

`
