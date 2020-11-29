import Styled from 'styled-components'
import { black, detailColor } from './GlobalStyle'

export const StyledNavbar = Styled.div`
*:active, *:focus {
  outline: none;
}

z-index: 100;
position: absolute;
width: 100%;
height: 10%;
top: 0;
left: 50%;
transform: translateX(-50%);
display: flex;
transition: 0.5s ease all;


.logo {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  a {
    text-decoration: none;
  }

  .title {
    text-transform: uppercase;
    font-weight: 700;
    line-height: 0;
    padding: 0;
    margin: 0;
    margin-left: 100px;
    color: ${black};
  }

  .description {
    text-transform: uppercase;
    font-weight: 400;
    margin-left: 100px;
    font-size: 12px;
    color: ${black};
  }
}

.burger-menu {
  width: 50%;
  display: flex;
  flex-direction: column;

  .burger {
    width: 30px;
    height: 30px;
    margin-left: auto;
    margin-right: 80px;
    margin-top: auto;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    cursor: pointer;

    .line {
      width: 80%;
      height: 6px;
      margin-top: 4px;
      background: ${black};
      border-radius: 2.5px;
    }
    .line2 {
      width: 50%;
    }
  }
}

@media screen and (min-width: 1500px) {
max-width: 1500px;
.logo {
  .title, .description {
    margin-left: 0;
  }
}
.burger-menu {
  .burger {
    margin-right: 0;
  }
}
}


@media screen and (min-width: 800px) {
  position: fixed;
}


@media screen and (max-width: 420px) {
  position: absolute;
  right: 7%;
  top: 4%;

  img {
    width: 24px;
  }

}

@media (pointer:coarse) {
  cursor: default;
}

`
