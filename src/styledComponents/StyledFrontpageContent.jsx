import Styled from 'styled-components'
import { black, white, bgColor, detailColor } from './GlobalStyle'

export const StyledFrontpageContent = Styled.div`

*:active, *:focus {
  outline: none;
}

width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
transition: 0.5s ease all;
overflow: hidden;


.hero-content{
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: 0.5s ease all;

.hero {

    .name {
      font-size: 50px;
      text-transform: uppercase;
      margin: 0;
      color: ${black};
      .mobile-break { display: none; }
    }

    .profession {
      text-transform: uppercase;
      font-size: 14px;
      letter-spacing: 1.8px;
      margin: 0;
      color: ${black};
      .mobile-break { display: none; }
    }

    .buttons {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
  
      .button {
        margin: 10px;
        border-style: none;
        height: 35px;
        width: 120px;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 1px;
        cursor: pointer;
        transition: .3s ease all;
      }


      .portfolio-btn {
        background: ${black};
        color: ${white};
      }

      .portfolio-btn:hover, .portfolio-btn:focus, .portfolio-btn:active {
        background: ${detailColor};
      }


      .contact-btn {
        background: ${white};
        color: ${black};
        border: 2px solid ${black};
      }

      .contact-btn:hover, .contact-btn:focus, .contact-btn:active {
        border: 2px solid ${detailColor};
        color: ${detailColor};
        
      }

   .contact-link:focus, .contact-link:active .contact-btn {
    border: 2px solid ${detailColor};
    color: ${detailColor};
      }

    }
 }
} 


@media screen and (max-width: 1030px) {
  .hero-content {
    .hero {
      .name {
        font-size: 60px;
      }
      .profession {
        font-size: 18px;
      }

      .buttons {

        .button {
          height: 50px;
          width: 170px;
          font-size: 14px;
        }
  
      }
    }
  }
}

@media screen and (max-width: 420px) {

.hero-content {
  justify-content: flex-start;
padding-left: 10%;
  .hero {

    .name {
      font-size: 45px;
      text-align: left;
      line-height: 1;
      margin-bottom: 5px;
      .mobile-break { display: block; }

    }
    .profession {
      font-size: 15px;
      text-align: left;
      span {
        display: none;
      }
      .mobile-break { display: block; }
    }
    .buttons {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      .button {
        height: 50px;
        width: 180px;
        font-size: 12px;
        margin: 8px 0 0 0;
      }

    }

  }
}

}


`
