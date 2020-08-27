import Styled from 'styled-components'
import { bgColor, shadow1, shadow2, black, detailColor } from './GlobalStyle'

export const StyledProjects = Styled.div`


width: 100vw;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
overflow: hidden;
transition: 0.5s ease all;

.title {
  margin-top: 50px;
  font-size: 20px;
  font-weight: 700;
  color: ${black};
}


@media screen and (max-width: 450px) {
  .title{
    margin-top: 30px;
    font-size: 16px;
  }
}

`
