import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: #f9f9f9;
  }
`

export const Container = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  background-color: #f9f9f9;
  padding: 0 24px;
`

export default GlobalStyle
