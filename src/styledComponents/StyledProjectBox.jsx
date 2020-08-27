import Styled from 'styled-components'
import { black, white, bgColor, shadow1, shadow2, detailColor } from './GlobalStyle'
export const StyledProjectBox = Styled.div`


width: 80%;
background: ${bgColor};
box-shadow: 18px 18px 30px ${shadow1}, -18px 18px 30px ${shadow2};
margin: 30px;
display: flex;
flex-direction: column;
border-radius: 30px;
padding: 30px;
box-sizing: border-box;
transition: 0.5s ease all;

.title {
  align-self: center;
  margin: 15px;
  font-size: 20px;
}


.flexbox {
  width: 100%;
  height: 95%;
  display: flex;
  box-sizing: border-box;

  .first-divs {
    width: 50%;
    min-height: 100%;
    display: flex;
    flex-direction: column;

    .info-div {
      height: 50%;
      min-height: 50%;
      display: flex;
      flex-direction: column;

      h3 {
        margin: 10px 5px 10px 5px;
        font-weight: 500;
        font-size: 18px;
      }
      .description {
        width: 90%;
      }
      p {
        margin: 5px;
        font-size: 16px;
        line-height: 25px;
      }

      a {
        color: ${detailColor};
        font-size: 14px;
      }
    }

    .mobile-div {
      align-self: flex-end;
      height: 50%;
      display: flex;
      align-items: flex-end;
    

      .img-mob {
        width: 20%;
        border: 2px ${black} solid;
        border-radius: 15px;
        margin: 0 5px;
      }

      .img-tab {
        width: 50%;
        border: 2px ${black} solid;
        border-radius: 15px;
        margin-left: auto;
      
      }
    }
  }

  .web-div {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 90%;
      margin: 5px 0;
      border: 2px ${black} solid;
      border-radius: 15px;
    }
  }
}




@media screen and (max-width: 1050px) {

  .flexbox {
    flex-direction: column;
    height: auto;

    .web-div {
     width: 100%;

     img {
       border-radius: 5px;
       width: 100%;
     }
    }

    .first-divs {
      width: 100%;

      .info-div {
        height: 100%;
      }

      .mobile-div {
        margin: 20px 0;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        padding-top: 10px;

        .img-mob, .img-tab {
          border-radius: 5px;
        }

        .img-mob {
          width: 30%;
        }

        .img-tab {
          display: none;
        }

      }
    }
  }
}

@media screen and (max-width: 450px) {
  width: 90%;
  margin-top: 50px;
  .flexbox {
    flex-direction: column;
    height: auto;

    .web-div {
     width: 100%;

     img {
       border-radius: 5px;
       width: 100%;
     }
    }

    .first-divs {
      width: 100%;

      .mobile-div {
        margin: 20px 0;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        padding-top: 10px;

        .img-mob, .img-tab {
          border-radius: 5px;
        }

        .img-mob {
          width: 40%;
        }
 
      }
    }
  }
}

@media (pointer:coarse) {
a {
  cursor: default;
}
}

`
