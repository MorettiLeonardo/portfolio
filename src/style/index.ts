import styled, { createGlobalStyle } from 'styled-components'

type Props = {
  color: 'black' | 'white'
}

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
  padding: 0 24px;
`

export const Title = styled.h3`
  max-width: 450px;
  color: #2d2e32;
  font-family: Poppins, sans-serif;
  font-size: 1.6rem;
  line-height: 1.4;
`

export const BlueParagraph = styled.span`
  color: #147efb;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
`

export const Social = styled.a<Props>`
  color: ${(props) => (props.color === 'white' ? '#fff' : '#000')};
  font-size: 32px;
  margin-right: 24px;

  :hover {
    transition: 0.4s;
    color: #007acc;
  }
`

export default GlobalStyle
