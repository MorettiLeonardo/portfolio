import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: #2d2e32;
  color: #fff;
  font-weight: bold;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 26px 0;

    a {
      font-size: 24px;
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 0 32px;
  }
`
