import styled from 'styled-components'

export const ProjectSection = styled.section`
  margin: 150px 0px;
`
export const ProjectImage = styled.img`
  max-width: 450px;
  max-height: 350px;
  margin-top: 24px;
  border-radius: 1rem;
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
`

export const ProjectTitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
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
