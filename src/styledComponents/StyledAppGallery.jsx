import Styled from 'styled-components'
import { black, white } from './GlobalStyle'

export const StyledAppGallery = Styled.div`


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
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 100px auto;

  .image {
    transition: .5s ease all;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
     width: 90%;
      cursor: pointer;
      transition: .7s ease all;
      margin: 20px 0;
      border-radius: 10px;
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
    width: 95%;

  }
}

@media screen and (max-width: 800px) {
  .gallery {
    width: 100%;
    margin: 50px 0; 
    .image {
      width: 80%;
    }
  }
}

@media screen and (max-width: 450px) {
  .title{
    margin-top: 100px;
    font-size: 16px;
  }

  .gallery {
    .image {
      width: 90%;

      img {
        width: 90%;
      }
    }
  }
}
`
