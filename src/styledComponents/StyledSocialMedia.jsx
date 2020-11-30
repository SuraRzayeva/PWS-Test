import Styled from 'styled-components'
import { black, white, bgColor, detailColor } from './GlobalStyle'
export const StyledSocialMedia = Styled.div`

position: absolute;
bottom: 3%;
right: 150px;
display: flex;
transition: 0.5s ease all;
align-items: flex-end;


img {
  width: 15px;
  padding: 10px;
  transition: .3s ease all;
  cursor: pointer;
  position: relative;
}

a:focus, a:active {
  outline: none;
}

a:after {
  content: '';
  height: 3px;
  width: 0;
  position: absolute;
  bottom: -3px;
  left: 0;
  background: red;
}

a:hover:after {
  width: 100%;
}

@media screen and (max-width: 1024px) {
  left: 50%;
  right: unset;
  bottom: 6%;
  transform: translateX(-50%);

  img {
    width: 20px;
  }
}


@media screen and (max-width: 420px) {
  bottom: 6%;
  left: 50%;
  transform: translateX(-50%);

  img {
    width: 20px;
  }
}

`
