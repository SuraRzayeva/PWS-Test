import Styled from 'styled-components'
import { black, white, bgColor, shadow1, shadow2, detailColor, dangerColor } from './GlobalStyle'

export const StyledContact = Styled.div`

*:active, *:focus {
  outline: none;
}

width: 100vw;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-sizing: border-box;
opacity: ${props => (props.menu ? '0.2;' : '1;')}
color: ${black};
font-family: "Montserrat", sans-serif;
transition: 0.5s ease all;
overflow-x: hidden;

.card {
  width: 70%;
max-width: 1000px;
background: ${bgColor};
box-shadow: 18px 18px 30px ${shadow1}, -18px 18px 30px ${shadow2};
border-radius: 30px;
  margin-top: 100px;
  margin-bottom: 30px;
  display: flex;
  padding: 20px;

  .about-div {
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

img {
  width: 75%;
  border-radius: 30px;
  margin: 1em;
}

.contact-info {
  width: 75%;

p {
  font-size: 14px;
  margin: 7px;
  .title {
    font-weight: 700;
  }
  
  .data {
    color: ${black};
    padding-left: 7px;
    user-select: text;
  }

  .data::selection {
    background: ${detailColor};
    color: ${white};
  }
}}

.social-icons {
  width: 75%;
  display: flex;
  margin-top: 10px;
  align-items: flex-end;
  img {
    width: 25px;
   margin: 10px;
    border-radius: 0;
    transition: .3s ease all;
  }

  a:focus {
background: ${detailColor};
  }

  img:hover {
    transform: scale(1.07);
    backface-visibility: hidden;
  }
}}

  .form-div {
    width: 50%;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .success {
      width: 80%;
      color: #4a934a;
      text-align: center;
      font-size: 14px;
      font-weight: 600;
      margin-top: 30px;
    }
    
    .text {
      width: 100%;
      p {
      color: ${black};
      font-size: 14px;
      }
    }

    .form {
      width: 100%;

     
      form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        margin-top: 15px;
     
       .flash-msg {
          position: absolute;
          color: ${props => (props.error ? dangerColor : 'green;')};
          width: 100%;
          top: -8%;
          left: 50%;
          transform: translateX(-50%);
          font-weight: 600;
          font-size: 12px;
          opacity: 1;
          text-align: center;
  
        }



        input {
          width: 100%;
          border-style: none;
          height: 40px;
          margin: 4px 0;
          box-shadow: inset 5px 5px 7px ${shadow1}, inset -5px 5px 7px ${shadow2};
          background: ${bgColor};
          padding: 10px;
          box-sizing: border-box;
          padding: 10px;
          font-family: "Montserrat", sans-serif;
          color: ${black};
          border-radius: 5px;
        }
  
        textarea {
         width: 100%;
         border-style: none;
         box-shadow: inset 5px 5px 7px ${shadow1}, inset -5px 5px 7px ${shadow2};
         background: ${bgColor};
         box-sizing: border-box;
         padding: 10px;
         margin: 4px 0;
         font-family: "Montserrat", sans-serif;
         color: ${black};
         border-radius: 5px;
         resize: none;
        }

        input:focus, textarea:focus {
          outline: none;
          border: 2px solid ${detailColor};
        
        }
   

        button {
          margin: 10px 0;
          border-style: none;
          height: 35px;
          width: 120px;
          text-transform: uppercase;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          cursor: pointer;
          transition: .3s ease all;
          color: ${white};
          background: ${black};
          align-self: flex-end;
        }

        button:hover {
          background: ${detailColor};
        }

        button: focus {
          background: ${detailColor}; 
        }

      }

    }
  }
}



@media screen and (max-width: 1030px) {
.card {
  margin-top: 300px;
  width: 85%;

  .about-div {
    img {
      width: 85%;
    }

    .contact-info {
      width: 85%;
    }

    .social-icons {
      width: 85%;
    }
  }
}
}

@media screen and (max-width: 800px) {
  .card {
    margin-top: 200px;
    width: 90%;

.about-div {
  
  img {
    width: 90%;
  }

  .contact-info {
    width: 90%;
  }
 
    .social-icons {
      width: 85%;
      display: flex;
      margin-top: 10px;
     
      img {
        width: 25px;
       margin: 7px;
        border-radius: 0;
    }
  }
}
  }
  }


  @media screen and (max-width: 500px) {
    .card {
     flex-direction: column;
     width: 90%;
     margin-top: 100px;
    
     .about-div {
       margin: auto;
      width: 100%;

      .contact-info {
        width: 90%;
      }
      .social-icons {
        width: 90%;
      }

      a {
        margin: 0 3px 0 0;
      }
     }

     .form-div {
      margin: auto;
      width: 90%;
      margin-top: 10px;

      .form {
        form {
          input, textarea {
            border: 2px ${black} solid;
          }
        }
      }
     }

    }
    }

    @media (pointer:coarse) {
      .card {
        .about-div {
         a {
           cursor: default;
         }
        }
    }
`
