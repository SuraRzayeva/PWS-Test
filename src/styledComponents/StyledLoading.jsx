import Styled from 'styled-components'
import { detailColor } from './GlobalStyle'

export const StyledLoading = Styled.div`

position: absolute;
top: 50%;
left:50%;
transform: translate(-50%, -50%);
z-index: 10;

.container {
width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;


  .pulse-container {
    width: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;


    .pulse-bubble {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: ${detailColor};
    }

    .pulse-bubble-1 {
      animation: pulse .4s ease 0s infinite alternate;
  }
  .pulse-bubble-2 {
      animation: pulse .4s ease .2s infinite alternate;
  }
  .pulse-bubble-3 {
      animation: pulse .4s ease .4s infinite alternate;
  }

  }

}

.hide {
  display: none;
}

  @keyframes pulse {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: .25;
      transform: scale(.75);
    }
  }


`
