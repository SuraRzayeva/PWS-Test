import Styled from 'styled-components'
import { white, black, detailColor } from './GlobalStyle'
export const StyledBlog = Styled.div`

width: 100vw;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
overflow: hidden;
transition: 0.5s ease all;

.title {
  margin-top: 100px;
  font-size: 20px;
  font-weight: 700;
  color: ${black};
}

.blog-gallery {
  margin: 50px 0;
  width: 60%;
  display: flex;
  flex-direction: column;
justify-content: center;
align-items: center;
}


@media screen and (max-width: 450px) {

  .title {
    margin-top: 100px;
    font-size: 16px;
  }

  .blog-gallery {
    width: 90%;
  }
}

`
