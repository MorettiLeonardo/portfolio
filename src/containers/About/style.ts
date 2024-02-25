import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  position: relative;

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

  @media (max-width: 768px) {
    margin-top: 20vh;
    flex-direction: column;
    text-align: center;
    gap: 3rem;
    top: 200px;
    left: 0;
  }
  @media (max-width: 900px) {
    gap: 2rem;
  }
`

export const Images = styled.div`
  position: relative;

  @media (max-width: 768px) {
    display: block;
  }
`
export const Spare = styled.div`
  @media (max-height: 820px) {
    padding: 30px;
  }
  @media (max-height: 759px) {
    padding: 60px;
  }
  @media (max-height: 685px) {
    padding: 100px;
  }
  @media (max-height: 598px) {
    padding: 1430px;
  }
`

export const AboutText = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 150px;
  }
`

export const CoffeImage = styled.img`
  width: 410px;
  height: 310px;
  border-radius: 1rem;
  @media (max-width: 768px) {
    display: none;
  }
`

export const Emoji = styled.img`
  max-width: 60px;
  position: absolute;
  bottom: 20px;
  right: 20px;

  @media (max-width: 768px) {
    display: none;
  }
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
  @media (max-width: 768px) {
    display: none;
  }
`
