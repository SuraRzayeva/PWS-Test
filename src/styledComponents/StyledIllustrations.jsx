import Styled from 'styled-components'
import { black, white } from './GlobalStyle'

export const StyledIllustrations = Styled.div`

width: 100%;
height: auto;
z-index: 100;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: auto;
transition: 0.5s ease all;

.title {
  margin-top: 100px;
  font-size: 20px;
  font-weight: 700;
  color: ${black};
}

.gallery {

  width: 80%;
  margin: 100px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;

  .image {
    transition: .5s ease all;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    img {
     width: 80%;
      cursor: pointer;
      transition: .7s ease all;
      margin: 20px 0;

      pointer-events: none;
    }

  }



  }

@keyframes imgAnimation {
  0% {
    tranform: scale(1);
  }
  100% {
    tranform: scale(1.1);
  }
}

@media screen and (max-width: 1100px) {
  .gallery {
    width: 80%;
    margin: 50px 0;
  }
}

@media screen and (max-width: 800px) {
  .gallery {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 450px) {
  .title{
    margin-top: 100px;
    font-size: 16px;
  }

  .gallery {
    width:95%;
    grid-template-columns: 1fr;
  }
}
`
