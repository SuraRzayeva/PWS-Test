import Styled from 'styled-components'
import { black, white, bgColor, detailColor, detailColor2 } from './GlobalStyle'

export const StyledFrontpageContent = Styled.div`

*:active, *:focus {
  outline: none;
}

width: 100%;
height: 100vh;
max-width: 1500px;
transition: 0.5s ease all;
overflow: hidden;
margin: 0 auto;
padding: 0 100px;
display: flex;
flex-direction: column;
justify-content: center;

.hero {
  width: 80%;
  .hero-text {
    font-size: 150px;
    color: ${black};
    line-height: 140px;
    font-weight: 800;
    padding: 0;
    margin: 0;

 
  }
}

.line-block {
  width: 60%;
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  button {
    border-style: none;
    background: transparent;
    margin: 0;
    padding: 0;
    margin-bottom: 10%;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    color: ${black};
  }


  .line {
    width: 100%;
    height: 5px;
    background: ${detailColor2};
    border-radius: 10px;
    position: relative;


    .circle {
      position: absolute;
      right: -15px;
      top: 0;
      width: 0;
      height: 0;
      background: ${detailColor};
      border-radius: 50%;
      transition: .2s ease all;
      animation: rotateCircle 3s 1s ease infinite;
      z-index: -1;
    } 

  }
  :hover .circle {
      background: ${detailColor};
      width: 100px;
      height: 100px;
      right: -20px;
      top: -55px;
      cursor: pointer;
    }

    /* :hover button {
      color: ${detailColor2};
    } */
}

@keyframes rotateLine {
  from {
    transform: rotate(0);
  }   to {
    transform: rotate(360deg);
  }
}

@keyframes rotateCircle {
  from {
    transform: rotate(0);
  }   to {
    transform: rotateY(360deg);
  }
}

@media screen and (max-width: 800px) {
  padding: 0 50px;
  .hero {
  .hero-text {
    font-size: 110px;
    line-height: 110px;
  }
}
}

@media screen and (max-width: 450px) {
  padding: 0 10px;
  .hero {
  .hero-text {
    font-size: 60px;
    line-height: 70px;
  }
}
.line-block {
  width: 80%;
}
}

@media screen and (max-width: 400px) {
  padding: 0 20px;
  .hero {
  .hero-text {
    font-size: 50px;
    line-height: 60px;
  }
}
.line-block {
  width: 80%;
}
}

@media screen and (max-width: 300px) {
  padding: 0 10px;
  .hero {
  .hero-text {
    font-size: 35px;
    line-height: 40px;
  }
}
.line-block {
  width: 75%;
}
}


`
