import { createGlobalStyle } from 'styled-components'
export const bgColor = '#ECF0F3'
export const shadow1 = '#D1D9E6'
export const shadow2 = '#FFFFFF'
export const black = '#494949'
export const white = '#ECF0F3'
export const detailColor = '#0e6ab5'
export const dangerColor = '#db2a50'

export const GlobalStyle = createGlobalStyle`


body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-y: ${(props) => (props.home || props.menu ? 'hidden;' : 'scroll;')};
  overflow-x: hidden;
  font-family: "Montserrat", sans-serif;
  user-select: none;
  background: ${white};
}



`
