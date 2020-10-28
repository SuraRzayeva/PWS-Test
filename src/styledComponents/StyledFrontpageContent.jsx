import Styled from 'styled-components'
import { black, white, bgColor, detailColor } from './GlobalStyle'

export const StyledFrontpageContent = Styled.div`

*:active, *:focus {
  outline: none;
}

width: 100%;
height: 100%;
transition: 0.5s ease all;
overflow: hidden;
margin: 0;
padding: 0;


.hero-content{
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: 0.5s ease all;


.hero {
width: 100%;
position: absolute;
top: 50%;

transform: translate(0, -50%);
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
        height: 40px;
        width: 170px;
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
        background: transparent;
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
        font-size: 48px;
      }
      .profession {
        font-size: 15px;
      }

      .buttons {

        .button {
     
          font-size: 14px;
        }
  
      }
    }
  }
}

@media screen and (max-width: 420px) {
 
.hero-content {
  
  .hero {
  top: 45%;
    .name {
      font-size: 32px;
      line-height: 1;
      margin-bottom: 5px;

    }
    .profession {
      font-size: 14px;

      span {
        display: none;
      }
      .mobile-break { display: block; }
    }
    .buttons {


      .button {
        height: 35px;
        width: 120px;
        font-size: 12px;
      
      }

    }

  }
}

}

@media screen and (max-width: 300px) {

  .hero-content {
  
    .hero {
    
      .name {
        font-size: 28px;
        line-height: 1;
        margin-bottom: 5px;
      }

      .profession {
        font-size: 10px;
      }

      .buttons {
        flex-direction: column;

        .button {
          margin: 5px;
        }
      }
    }
  }
}

`
