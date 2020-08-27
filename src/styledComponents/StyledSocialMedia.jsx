import Styled from 'styled-components'
import { black, white, bgColor, detailColor } from './GlobalStyle'
export const StyledSocialMedia = Styled.div`

position: absolute;
bottom: 3%;
right: 5%;
display: flex;
transition: 0.5s ease all;
align-items: flex-end;

img {
  width: 20px;
  padding: 10px;
  transition: .3s ease all;
  cursor: pointer;
}

img:hover {
  transform: scale(1.07);
  backface-visibility: hidden;
}

a:focus, a:active {
  outline: none;
  background: ${detailColor};
}


@media screen and (max-width: 1024px) {
  left: 50%;
  right: unset;
  bottom: 6%;
  transform: translateX(-50%);

  img {
    width: 30px;
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
