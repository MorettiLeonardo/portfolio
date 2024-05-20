import styled from 'styled-components'
import { Title } from '../../style'

export const ProjectSection = styled.section`
  margin: 150px 0px;

  @media (max-width: 768px) {
    text-align: center;
    margin: 100 0;

    ${Title} {
      margin: 0 auto;
      margin-top: 12px;
    }
  }
`
export const ProjectImage = styled.img`
  max-width: 450px;
  max-height: 350px;

  object-fit: cover;
  margin-top: 24px;
  border-radius: 1rem;

  @media (max-width: 504px) {
    min-width: auto;
    min-height: auto;
  }
`

type Props = {
  side: 'left' | 'right'
}

export const Project = styled.div<Props>`
  display: flex;
  direction: ${(props) => (props.side === 'left' ? 'ltr' : 'rtl')};
  text-align: center;
  gap: 30px;
  margin-top: 4rem;

  p {
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
    color: #767676;
    margin-top: 2.5rem;
  }

  @media (max-width: 952px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 768px) {
    img {
      margin: 0;
      max-width: 300px;
    }
  }
`

export const ProjectTitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  font-size: 24px;
  color: #2d2e32;
  direction: ltr;

  img {
    max-width: 26px;
    max-height: 26px;
    margin: 0 8px;
  }
`

export const ProjectInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 2.5rem;
  font-size: 17px;

  a {
    display: flex;
    align-items: center;
    color: #000;
    font-size: 18px;

    i,
    img {
      margin: 0px 8px;
    }

    img {
      max-width: 18px;
    }

    span:hover {
      transition: 0.3s;
      color: #007acc;
    }
  }
`

export const ProjectTechs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
`
