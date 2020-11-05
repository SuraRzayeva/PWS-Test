import Styled from 'styled-components'
import { bgColor, shadow1, shadow2, black, detailColor, white } from './GlobalStyle'

export const StyledMenuBoxes = Styled.div`

*:active, *:focus {
  outline: none;
}

position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
z-index: ${(props) => (props.menu ? '100;' : '-100; ')}
overflow: hidden;
transition: 0.5s ease all;


.close-btn {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 900;
  z-index: ${(props) => (props.menu ? '110;' : '-100; ')}
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease all;
  width: 30px;
  height: 30px;
  background: ${white};
  color: ${black};
  border-radius: 50%;


  box-shadow: 0 0 5px ${shadow1};

p {
    font-weight: 500;
  }
}

.close-btn: hover {
  background: ${detailColor};
}

.close-btn:focus {
  outline: none;
  background: ${detailColor};
}

.boxes {
  width: 100%;
  height: 100%;
  position: relative;
  transition: .5s ease all;
  pointer-events: ${(props) => (props.menu ? 'auto;' : 'none')}
  z-index: ${(props) => (props.menu ? '100;' : '-100; ')}

  .box {
    width: 180px;
    height: 180px;
    background-color: ${bgColor};
    background: linear-gradient(to right, ${bgColor}, #f5f9fc);
    box-shadow: 18px 18px 30px ${shadow1}, -18px 18px 30px ${shadow2};
    position: absolute;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
  
    a {
      text-decoration: none;
      transition: 0.5s ease all;
    h1 {
      font-size: 14px;
      color: ${black};
      transition: 0.5s all ease;
      backface-visibility: hidden;
    }
  }

 a:hover h1{
    color: ${detailColor};
    backface-visibility: hidden;
  }
  }

  a:focus h1{
    outline: none;
    color: ${detailColor};
  }

  .box-1 {
    top: 5%;
    left: 60%;
    animation: ${(props) => (props.menu ? 'box1ToCenter .5s ease forwards;' : 'box1Back .5s ease forwards; ')}
    z-index: ${(props) => (props.menu ? '100;' : '-100; ')}
    cursor: ${(props) => (props.menu ? 'pointer;' : null)}
  }

  .box-2 {
    top: 15%;
    left: 20%;
    animation: ${(props) => (props.menu ? 'box2ToCenter .5s ease forwards;' : 'box2Back .5s ease forwards; ')}
    z-index: ${(props) => (props.menu ? '100;' : '-100; ')}
    cursor: ${(props) => (props.menu ? 'pointer;' : null)}
  }



  .box-3 {
    top: 70%;
    left: 50%;
    animation: ${(props) => (props.menu ? 'box3ToCenter .5s ease forwards;' : 'box3Back .5s ease forwards; ')}
    z-index: ${(props) => (props.menu ? '100;' : '-100; ')}
    cursor: ${(props) => (props.menu ? 'pointer;' : null)}
 
  }

  .box-4 {
    top: 50%;
    left: 80%;

    animation: ${(props) => (props.menu ? 'box5ToCenter .5s ease forwards;' : 'box5Back .5s ease forwards; ')}
    z-index: ${(props) => (props.menu ? '100;' : '-100; ')}
    cursor: ${(props) => (props.menu ? 'pointer;' : null)}

  }

  .box-5 {
    left: 92%;
    top: -5%;
    animation: ${(props) => (props.menu ? 'box6ToCenter .5s ease forwards;' : 'box6Back .5s ease forwards; ')}
    z-index: ${(props) => (props.menu ? '100;' : '-100; ')}
    cursor: ${(props) => (props.menu ? 'pointer;' : null)}
  }

  .box-6 {
    top: 65%;
    left: 7%;
    animation: ${(props) => (props.menu ? 'box4ToCenter .5s ease forwards;' : 'box4Back .5s ease forwards; ')}
    z-index: ${(props) => (props.menu ? '100;' : '-100; ')}
    cursor: ${(props) => (props.menu ? 'pointer;' : null)}
  }


.box-7 {
  top: -3%;
  left: -5%;
  z-index: -100;
  transition: .5s all ease;
  opacity: ${(props) => (props.menu ? '0;' : '1;')}
}
}


@keyframes box1ToCenter {
  from {
    top: 5%;
    left: 60%;
    transform: none;
  }
  to {
    top: 40%;
    left: 30%;
    transform: translate(-50%, -50%);
  }
}

@keyframes box1Back {
  from {
    top: 40%;
    left: 30%;
    transform: translate(-50%, -50%);
  }
  to {
    top: 5%;
    left: 60%;
    transform: translate(0);
  }
}

@keyframes box1ToCenterM {
  from {
    top: 70%;
    left: 60%;
    transform: none;
  }
  to {
    top: 30%;
    left: 30%;
    transform: translate(-50%, -50%);
  }
}

@keyframes box1BackM {
  from {
    top: 30%;
    left: 30%;
    transform: translate(-50%, -50%);
  }
  to {
    top: 70%;
    left: 60%;
    transform: translate(0);
  }
}

@keyframes box2ToCenter {
  from {
    top: 15%;
    left: 20%;
    transform: none;
  }
  to {
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

@keyframes box2Back {
  from {
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  to {
    top: 15%;
    left: 20%;
    transform: translate(0);
  }
}


@keyframes box2ToCenterM {
  from {
    top: 65%;
    left: 10%;
    transform: none;
  }
  to {
    top: 30%;
    left: 70%;
    transform: translate(-50%, -50%);
  }
}


@keyframes box2BackM {
  from {
    top: 30%;
    left: 70%;
    transform: translate(-50%, -50%);
  }
  to {
    top: 65%;
    left: 10%;
    transform: none;
  }
}

@keyframes box3ToCenter {
  from {
    top: 70%;
    left: 50%;
    transform: none;
  }
  to {
    top: 40%;
    left: 70%;
    transform: translate(-50%, -50%);
  }
}

@keyframes box3Back {
  from {
    top: 40%;
    left: 70%;
    transform: translate(-50%, -50%);
  }
  to {
    top: 70%;
    left: 50%;
    transform: translate(0);
  }
}

@keyframes box3ToCenterM {
  from {
    top: 20%;
      left: 80%;
    transform: none;
  }
  to {
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
  }
}


@keyframes box3BackM {
  from {
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
  }
  to {
    top: 20%;
      left: 80%;
    transform: none;

  }
}

@keyframes box4ToCenter {
  from {
    top: 65%;
    left: 7%;
    transform: none;
  }
  to {
    top: 70%;
    left: 70%;
    transform: translate(-50%, -50%);
  }
}

@keyframes box4Back {
  from {
    top: 70%;
    left: 70%;
    transform: translate(-50%, -50%);
  }
  to {
    top: 65%;
    left: 7%;
    transform: translate(0);
  }
}

@keyframes box4ToCenterM {
  from {
    top: 15%;
    left: 3%;
    transform: none;
  }
  to {
    top: 70%;
    left: 70%;
    transform: translate(-50%, -50%);
  }
}



@keyframes box4BackM {
  from {
    top: 70%;
    left: 70%;
    transform: translate(-50%, -50%);
  }
  to {
    top: 15%;
    left: 3%;
    transform: none;
  }
}



@keyframes box5ToCenter {
  from {
    top: 50%;
    left: 80%;
    transform: none;
  }
  to {
    top: 70%;
    left: 30%;
    transform: translate(-50%, -50%);
  }
}

@keyframes box5Back {
  from {
    top: 70%;
    left: 30%;
    transform: translate(-50%, -50%);
  }
  to {
    top: 50%;
    left: 80%;
    transform: translate(0);
  }
}

@keyframes box5ToCenterM {
  from {
    top: 90%;
    left: 30%;
    transform: none;
  }
  to {
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%);
  }
}




@keyframes box5BackM {
  from {
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%);
  }
  to {
    top: 90%;
    left: 30%;
    transform: none;
  }
}


@keyframes box6ToCenter {
  from {
    left: 92%;
    top: -5%;
    transform: none;
  }
  to {
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}


@keyframes box6Back {
  from {
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  to {
    left: 92%;
    top: -5%;
    transform: translate(0);
  }
}

@keyframes box6ToCenterM {
  from {
    top: -5%;
    left: 45%;
    transform: none;
  }
  to {
    top: 70%;
    left: 30%;
    transform: translate(-50%, -50%);
  }
}

@keyframes box6BackM {
  from {
    top: 70%;
    left: 30%;
    transform: translate(-50%, -50%);
  }
  to {
    top: -5%;
    left: 45%;
    transform: none;
  }
}

 
@media screen and (max-width: 1200px) {
  .close-btn {
    width: 30px;
    height: 30px;
  }

}


@media screen and (max-width: 800px) {

  .close-btn {
    top: 10%;
  }
  .boxes {

    .box-1 {
      top: 70%;
      left: 60%;
      animation: ${(props) => (props.menu ? 'box1ToCenterM .5s ease forwards;' : 'box1BackM .5s ease forwards; ')}

    }

    .box-2 {
      top: 65%;
      left: 10%;
      animation: ${(props) => (props.menu ? 'box2ToCenterM .5s ease forwards;' : 'box2BackM .5s ease forwards; ')}
    }

    .box-3 {
      top: 20%;
      left: 80%;
      animation: ${(props) => (props.menu ? 'box3ToCenterM .5s ease forwards;' : 'box3BackM .5s ease forwards; ')}
   
    }

    .box-4 {
      top: 90%;
      left: 30%;

      animation: ${(props) => (props.menu ? 'box5ToCenterM .5s ease forwards;' : 'box5BackM .5s ease forwards; ')}
    }

    .box-5 {
      top: -5%;
      left: 45%;
      animation: ${(props) => (props.menu ? 'box6ToCenterM .5s ease forwards;' : 'box6BackM .5s ease forwards; ')}
    }

    .box-6 {
      top: 15%;
      left: 3%;
      animation: ${(props) => (props.menu ? 'box4ToCenterM .5s ease forwards;' : 'box4BackM .5s ease forwards; ')}
    }

    .box-7 {
      top: -8%;
      left: 30%;
      display: none;
    }
  }
}

@media screen and (max-width: 420px) {

  .close-btn {
    width: 25px;
    height: 25px;
  }

  .boxes {
    .box {
      width: 100px;
      height: 100px;
      border-radius: 20px;
      a {
        h1 {
          font-size: 9px;
        }
      }
    }
  }
}


@media screen and (max-width: 300px) {

  .boxes {
    .box {
      width: 100px;
      height: 100px;
      border-radius: 20px;
      a {
        h1 {
          font-size: 8px;
        }
      }
    }
  }
}

@media (pointer:coarse) {

  .close-btn {
    cursor: default;
  }
.boxes {
  .box {
    cursor: default;
    a {
      cursor: default;
    }
  }
}

}
`
