import Styled from 'styled-components'
import { black } from './GlobalStyle'

export const StyledCredit = Styled.div`



position: ${props => (props.home ? 'absolute;' : null)};
bottom: 3%;
left: 5%;
display: flex;
align-items: center;
justify-content: center;
overflow-x: hidden;
transition: 0.5s ease all;
opacity: ${props => (props.menu ? '0.2;' : '1;')}

p {
  font-size: 12px;
  font-weight: 500;
  color: ${black};

}

@media screen and (max-width: 1030px) {
  bottom: 2%;
  left: 50%;
  transform: ${props => (props.home ? 'translateX(-50%);' : null)}
}


@media screen and (max-width: 420px) {
  p {
    font-size: 10px;
  }
}

`
