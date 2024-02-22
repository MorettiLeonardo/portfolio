import styled from 'styled-components'
import { Title } from '../../style'

export const ContactContainer = styled.section`
  margin-top: 60px;
  margin-bottom: 100px;

  ${Title} {
    margin-top: 20px;
  }
`

export const Infos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  p {
    color: #8e8e8e;

    &:hover {
      color: #147efb;
    }
  }
`

export const IconBox = styled.span`
  padding: 8px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 30px;
  }
`

export const InfosContainer = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 80px;
`
