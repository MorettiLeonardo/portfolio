import { Avatar, Main, Title, Info, Infos, List } from './style'

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
      img: 'https://skillicons.dev/icons?i=react,vue'
    },
    {
      id: 4,
      img: 'https://skillicons.dev/icons?i=tailwind,sass'
    }
  ]

  return (
    <Main>
      <Info>
        <Infos>
          <Title>Front-End React Developer</Title>
          <p>
            Olá, Eu sou Leonardo Moretti. Um desenvolvedor Front-end React que
            mora em Curitiba, Paraná.
          </p>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/leonardo-frontend-dev/"
            rel="noreferrer"
          >
            <i className="devicon-linkedin-plain"></i>
          </a>
          <a
            target="_blank"
            href="https://github.com/MorettiLeonardo"
            rel="noreferrer"
          >
            <i className="devicon-github-original"></i>
          </a>
        </Infos>
        <Avatar />
      </Info>

      <List>
        <p>Tech Stack</p>
        {skillsIcons.map((skill) => (
          <li key={skill.id}>
            <img src={skill.img} />
          </li>
        ))}
      </List>
    </Main>
  )
}

export default Hero