import { Social } from '../../style'

import * as S from './style'

const Hero = () => {
  const skillsIcons = [
    {
      id: 1,
      img: 'https://skillicons.dev/icons?i=html,css'
    },
    {
      id: 2,
      img: 'https://skillicons.dev/icons?i=js,ts'
    },
    {
      id: 3,
      img: 'https://skillicons.dev/icons?i=react,next'
    },
    {
      id: 4,
      img: 'https://skillicons.dev/icons?i=sass,tailwind'
    }
  ]

  return (
    <S.Main>
      <S.Info>
        <S.Avatar />
        <S.Infos>
          <S.Title>Desenvolvedor React Front-end</S.Title>
          <p>
            Olá, Eu sou Leonardo Moretti. Um desenvolvedor Front-end React que
            mora em Curitiba, Paraná
          </p>
          <Social
            color="black"
            target="_blank"
            href="https://www.linkedin.com/in/leonardo-frontend-dev/"
            rel="noreferrer"
          >
            <i className="devicon-linkedin-plain"></i>
          </Social>
          <Social
            color="black"
            target="_blank"
            href="https://github.com/MorettiLeonardo"
            rel="noreferrer"
          >
            <i className="devicon-github-original"></i>
          </Social>
        </S.Infos>
      </S.Info>

      <S.List>
        <S.P>Tech Stack</S.P>
        <S.Bar></S.Bar>
        <S.TechList>
          {skillsIcons.map((skill) => (
            <li key={skill.id}>
              <S.SkillLogo src={skill.img} />
            </li>
          ))}
        </S.TechList>
      </S.List>
    </S.Main>
  )
}

export default Hero
