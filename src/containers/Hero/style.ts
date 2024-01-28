import styled from 'styled-components'

export const Main = styled.main`
  margin-top: 20vh;
  height: 80vh;
`

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Infos = styled.div`
  max-width: 55%;

  p {
    line-height: 1.4;
    margin: 24px 0;
    font-size: 18px;
    color: #656565;
  }

  a {
    color: #000;
    font-size: 32px;
    margin-right: 24px;

    :hover {
      transition: 0.4s;
      color: #007acc;
    }
  }
`

export const Title = styled.h1`
  font-size: 3.5rem;
  color: #2d2e32;
  line-height: 1.2;
`

export const Avatar = styled.div`
  background-image: url('https://scontent.fbfh8-1.fna.fbcdn.net/v/t39.30808-6/340750226_2113065948896246_593794117264848533_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeGiHhRgCZ-rDdB-SyRfoGYEBqgHy04oeRAGqAfLTih5EMfR0WqrA1etaCW1zElAEAFfKKmkeZaPVIE6nhfI1HNM&_nc_ohc=zI9nRUJ8cDMAX9mA653&_nc_ht=scontent.fbfh8-1.fna&oh=00_AfDCHtu6fm5SpOmR6nr1BBQlWYMfFDmL1JmisJxH9AOGTw&oe=65B683A6');
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
`

export const List = styled.ul`
  margin-top: 10%;
  display: flex;
  align-items: center;
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
`

export const Bar = styled.div`
  border-right: 2px solid #a5a2a2;
  padding: 10px;
  margin-right: 50px;
`
