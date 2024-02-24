import styled from 'styled-components'

import avatar from '../../static/avatar.jpg'

export const Main = styled.main`
  margin-top: 30vh;
  height: 70vh;

  @media (max-width: 768px) {
    margin-top: 16vh;
  }
`

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  direction: rtl;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0 auto;
    text-align: center;
    font-size: 3rem;
  }
`

export const Infos = styled.div`
  max-width: 55%;

  p {
    line-height: 1.4;
    margin: 24px 0;
    font-size: 18px;
    color: #656565;
  }
`

export const Title = styled.h1`
  font-size: 3.5rem;
  color: #2d2e32;
  line-height: 1.2;

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`

export const Avatar = styled.div`
  background-image: url(${avatar});
  width: 21rem;
  height: 21rem;
  background-size: cover;
  -webkit-background-position: center;
  background-position: center center;
  animation: animate 10s ease-in-out infinite;
  transition: all 1s ease-in-out;
  border: 3px solid #000;

  @keyframes animate {
    0%,
    100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`

export const List = styled.ul`
  margin-top: 10%;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const TechList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 20px;
  }
`

export const SkillLogo = styled.img`
  margin: 0 18px;
  cursor: pointer;
  transition: transform 0.4s;

  &:hover {
    transform: translateY(-10px);
  }
`

export const P = styled.p`
  color: #000;
  font-weight: 600;
  font-size: 16px;

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 32px;
    font-size: 18px;
    border-bottom: 2px solid #a5a2a2;
    padding-bottom: 8px;
  }
`

export const Bar = styled.div`
  border-right: 2px solid #a5a2a2;
  padding: 10px;
  margin-right: 50px;

  @media (max-width: 768px) {
    display: none;
  }
`
