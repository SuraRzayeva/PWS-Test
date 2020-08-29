import Styled from 'styled-components'
import { white, black, detailColor, shadow1, shadow2, bgColor } from './GlobalStyle'
export const StyledSinglePost = Styled.div`

width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-sizing: border-box;
color: ${black};
overflow-x: hidden;
transition: 0.5s ease all;

.back {
 opacity: ${props => (props.menu ? '0;' : '1;')}
  position: fixed;
  top: 12%;
  left: 3.4%;
  z-index: 100;
  width: 30px;
  height: 30px;
  background: ${black};
  color: ${white};
  border-radius: 5px;
  box-shadow: 0 0 5px ${shadow1};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  transition: 0.5s ease all;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 3px;
    img {
      width: 40%;
    }
  }


}

.back:hover {
  background: ${detailColor};
}

.post-card {
  width: 60%;
 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${bgColor};
  box-shadow: 18px 18px 30px ${shadow1}, -18px 18px 30px ${shadow2};
  margin: 50px 0;
  padding: 40px;
  border-radius: 30px;
  position: relative;



.heading {

  .title {
    margin: 30px 0;
    font-size: 20px;
    font-weight: 600;
    color: ${black};
  }
}

  .article {
    width: 90%;
    p {
      line-height: 2;
    }
  }

  .footer {
    align-self: flex-end;
    p {
      font-size: 12px;
    }
  }
}





@media screen and (max-width: 1200px) {

  .back {
    position: absolute;
    width: 35px;
    height: 35px;
    top: 7%;
    left: 50%;
    transform: translateX(-50%);
  }
  .post-card {
    width: 70%;
    margin: 180px 0;
  }

  .article {
    p {
      font-size: 16px;
    }
  }
}


@media screen and (max-width: 800px) {
  .post-card {
    width: 80%;
    margin: 180px 0;
  }

  .back {
    position: absolute;
    width: 35px;
    height: 35px;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }

}


@media screen and (max-width: 430px) {

  .back {
    position: absolute;
    width: 27px;
    height: 27px;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }

  .post-card {
    width: 85%;
    margin: 130px 0 30px 0;
    padding: 50px 10px;


    .article {
      p {
        font-size: 16px;
      }
    }
  }
}

@media (pointer:coarse) {
  .post-card {
    a{
        cursor: default;    
    }
  }
}
`
