import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  h3 {
    margin-top: 20px;
  }

  p {
    color: #767676;
    font-family: Mulish, sans-serif;
    font-size: 17px;
    font-weight: 500;
    line-height: 1.5;
    margin-top: 20px;
  }
`

export const Images = styled.div`
  position: relative;
`

export const CoffeImage = styled.img`
  width: 410px;
  height: 310px;
  border-radius: 1rem;
`

export const Emoji = styled.img`
  max-width: 60px;
  position: absolute;
  bottom: 20px;
  right: 20px;
`

export const ImageText = styled.img`
  max-width: 200px;
  position: absolute;
  bottom: -50px;
  right: -50px;
  background-color: #f9f9f9;
  border-radius: 50%;
  animation: infiniteRotate 10s linear infinite;

  @keyframes infiniteRotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
