import Styled from 'styled-components'
import { black, detailColor, detailColor2, white } from './GlobalStyle'

export const StyledNavbar = Styled.div`
*:active, *:focus {
  outline: none;
}

z-index: 100;
position: absolute;
width: 100%;
height: 100px;
top: 0;
left: 0;
display: flex;
transition: 0.3s ease all;



.logo {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 10px;
  padding-left: 150px;


  a {
    text-decoration: none;
  }

  .title {
    text-transform: uppercase;
    font-weight: 700;
    line-height: 0;
    padding: 0;
    margin: 0;

    color: ${black};
  }

  .description {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 12px;
    color: ${black};
  }
}

.burger-menu {
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-right: 150px;

  .burger {
    width: 30px;
    height: 30px;
    margin-left: auto;
    margin-top: auto;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-bottom: 10px;
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

    :focus, :active {
    outline: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }


  }


}



:hover {
  background: ${(props) => (props.top > 100 ? black : 'transparent')};
}

:hover .logo .title, :hover .logo .description {
  color: ${(props) => (props.top > 100 ? white : black)};
}

:hover .burger-menu .burger .line {
  background: ${(props) => (props.top > 100 ? white : black)};
}


@media screen and (min-width: 1800px) {
max-width: 1800px;
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

@media screen and (max-width: 800px) {
  .logo {
    padding-left: 50px;
  }

  .burger-menu {
    padding-right: 50px;
  }
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
