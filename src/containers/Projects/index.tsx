import { BlueParagraph, Title } from '../../style'

import redirect from '../../static/share.png'

import project1 from '../../static/efood.png'
import icon1 from '../../static/cutlery.png'

import project2 from '../../static/eplay.png'
import icon2 from '../../static/console.png'

import project3 from '../../static/rent.jpeg'
import icon3 from '../../static/car.png'

import * as S from './styles'

type Side = 'left' | 'right'

interface ProjectData {
  name: string
  cover: string
  description: string
  techs: string[]
  code: string
  live: string
  tagIcon: string
  side: Side
}

const GithubProjects: ProjectData[] = [
  {
    name: 'EPLAY',
    cover: `${project2}`,
    description:
      'A EPLAY é a sua loja de jogos online definitiva, oferecendo uma interface moderna e amigável para explorar uma vasta coleção de jogos. Com destaques dos últimos lançamentos e promoções especiais, você pode encontrar facilmente os jogos ideais para você',
    techs: ['ReactTS', 'Styled Components', 'Redux', 'API'],
    code: 'https://github.com/MorettiLeonardo/eplay',
    live: 'https://eplay-eosin.vercel.app/',
    tagIcon: `${icon2}`,
    side: 'left'
  },
  {
    name: 'EFOOD',
    cover: `${project1}`,
    description:
      'Explore uma infinidade de opções culinárias com o aplicativo EFOOD. De sushi a hambúrgueres, de pizza a comida mexicana, a EFOOD tem tudo para satisfazer seus desejos gastronômicos, entregando conveniência na palma da sua mão',
    techs: ['ReactTS', 'Styled Components', 'Redux', 'API'],
    code: 'https://github.com/MorettiLeonardo/efood',
    live: 'https://efood-beta-rust.vercel.app/',
    tagIcon: `${icon1}`,
    side: 'right'
  },
  {
    name: 'Rent Wheels',
    cover: `${project3}`,
    description:
      'Um site de aluguel de carros oferece aos usuários a conveniência de pesquisar, comparar e reservar uma variedade de veículos online, personalizando suas escolhas com datas, locais de retirada e devolução, e extras como seguro.',
    techs: ['ReactTS', 'Styled Components'],
    code: 'https://github.com/MorettiLeonardo/car-rent',
    live: 'https://car-rent-drab.vercel.app/',
    tagIcon: `${icon3}`,
    side: 'left'
  }
]

const Projects = () => {
  return (
    <S.ProjectSection>
      <BlueParagraph>Portfolio</BlueParagraph>
      <Title>Cada projeto é uma única peça de desenvolvimento!</Title>
      {GithubProjects.map((project) => (
        <S.Project side={project.side} key={project.name}>
          <S.ProjectImage src={project.cover} alt="" />
          <div>
            <S.ProjectTitle>
              {project.name}
              <img src={project.tagIcon} />
            </S.ProjectTitle>
            <p>{project.description}</p>
            <S.ProjectInfo>
              <S.ProjectTechs>
                {project.techs.map((tech) => (
                  <h4 key={tech}>{tech}</h4>
                ))}
              </S.ProjectTechs>
            </S.ProjectInfo>
            <S.ProjectInfo>
              <a href={project.code} target="_blank" rel="noreferrer">
                <span>Código</span> <i className="devicon-github-original"></i>
              </a>
              <a href={project.live} target="_blank" rel="noreferrer">
                <span>Live Demo</span>{' '}
                <img src={redirect} alt="Link de redirecionamento" />
              </a>
            </S.ProjectInfo>
          </div>
        </S.Project>
      ))}
    </S.ProjectSection>
  )
}

export default Projects
