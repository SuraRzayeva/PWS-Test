import Styled from 'styled-components'
import { black, detailColor2, white } from '../GlobalStyle'

export const StyledUIUXGallery = Styled.div`

width: 100%;
z-index: 100;
transition: 0.5s ease all;  
margin: auto;

.gallery-navigation {
  margin: 150px 100px 50px 100px;
  display: flex;
  align-items: center;

  ul {
    display: flex;
    list-style: none;
    width: 50%;
    justify-content: space-between;
    margin: 0;
    padding: 0;
  }

  li {
    font-weight: 600;
    font-size: 15px;
    transition: .5s ease all;
    position: relative;

    a {
      text-decoration: none;
      color: ${black};
    }
  }

  li:after {
    content: '';
    height: 4px;
    width: 0;
    background: ${detailColor2};
    position: absolute;
    left: 0;
    bottom: -5px;
    transition: .2s ease all;
  }

  li:hover:after {
    width: 100%;
  }

}


.grid {
  margin: 0 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  img {
    width: 100%;
  }
}

@media screen and (min-width: 1700px) {
max-width: 1500px;

.gallery-navigation, .grid {
  margin-left: 0;
  margin-right: 0;
}


}

`
