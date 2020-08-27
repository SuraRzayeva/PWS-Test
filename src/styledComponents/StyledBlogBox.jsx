import Styled from 'styled-components'
import { black, white, bgColor, shadow1, shadow2, detailColor } from './GlobalStyle'

export const StyledBlogBox = Styled.div`

*:active, *:focus {
  outline: none;
}

width: 100%;
height: 100%;
background: ${bgColor};
box-shadow: 18px 18px 30px ${shadow1}, -18px 18px 30px ${shadow2};
margin: 30px;
display: flex;
border-radius: 30px;
padding: 30px;
box-sizing: border-box;
transition: 0.5s ease all;

:focus {
  outline: none;
}

.image-div {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 90%;
    border-radius: 30px;

  }
}

.description-div {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  a {
    align-self: flex-end;
  }
  button {
    margin: 10px 0;
    border-style: none;
    min-height: 35px;
    height: 35px;
    min-width: 120px;
    width: 120px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
    cursor: pointer;
    transition: .3s ease all;
    color: ${white};
    background: ${black};
  }

  button:hover {
    background: ${detailColor};
  }

  button:focus, button:active {
    outline: none;
    background: ${detailColor};
  }
}




@media screen and (max-width: 800px) {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .image-div {
    width: 100%;

    img {
      width: 100%;
    }
  }

  .description-div {
    width: 100%;
  }
}

@media screen and (max-width: 450px) { 

  flex-direction: column;
  margin: 10px;

  
  .image-div {
    width: 100%;
    height: 50%;
    
    img {
      width: 100%;
    }
  }
  
  .description-div {
    width: 100%;
    height: 50%;
  }
  }

  @media (pointer:coarse) {
    .description-div {
      a {
    cursor: default;
      }
    }
  }
  

`
