import { BlueParagraph, Title } from '../../style'
import {
  Project,
  ProjectImage,
  ProjectInfo,
  ProjectSection,
  ProjectTechs,
  ProjectTitle
} from './styles'

import redirect from '../../static/share.png'

import efood from '../../static/efood.png'
import food from '../../static/cutlery.png'

import eplay from '../../static/eplay.png'
import gaming from '../../static/console.png'

import taskList from '../../static/taskList.png'
import task from '../../static/task.png'

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
    cover: `${eplay}`,
    description:
      'A EPLAY é a sua loja de jogos online definitiva, oferecendo uma interface moderna e amigável para explorar uma vasta coleção de jogos. Com destaques dos últimos lançamentos e promoções especiais, você pode encontrar facilmente os jogos ideais para você',
    techs: ['ReactTS', 'Styled Components', 'Redux'],
    code: 'https://github.com/MorettiLeonardo/eplay',
    live: 'https://eplay-eosin.vercel.app/',
    tagIcon: `${gaming}`,
    side: 'left'
  },
  {
    name: 'EFOOD',
    cover: `${efood}`,
    description:
      'Explore uma infinidade de opções culinárias com o aplicativo EFOOD. De sushi a hambúrgueres, de pizza a comida mexicana, a EFOOD tem tudo para satisfazer seus desejos gastronômicos, entregando conveniência na palma da sua mão',
    techs: ['ReactTS', 'Styled Components', 'Redux'],
    code: 'https://github.com/MorettiLeonardo/efood',
    live: 'https://efood-beta-rust.vercel.app/',
    tagIcon: `${food}`,
    side: 'right'
  },
  {
    name: 'Task List',
    cover: `${taskList}`,
    description:
      'Um aplicativo de gestão de tarefas altamente personalizável e intuitivo, projetado para ajudá-lo a organizar suas atividades diárias com eficiência',
    techs: ['ReactTS', 'Styled Components', 'Redux'],
    code: 'https://github.com/MorettiLeonardo/minhas-tarefas',
    live: 'https://minhas-tarefas-gilt.vercel.app/',
    tagIcon: `${task}`,
    side: 'left'
  }
]

const Projects = () => {
  return (
    <ProjectSection>
      <BlueParagraph>Portfolio</BlueParagraph>
      <Title>Cada projeto é uma única peça de desenvolvimento!</Title>
      {GithubProjects.map((project) => (
        <Project side={project.side} key={project.name}>
          <ProjectImage src={project.cover} alt="" />
          <div>
            <ProjectTitle>
              {project.name}
              <img src={project.tagIcon} />
            </ProjectTitle>
            <p>{project.description}</p>
            <ProjectInfo>
              <ProjectTechs>
                {project.techs.map((tech) => (
                  <h4 key={tech}>{tech}</h4>
                ))}
              </ProjectTechs>
            </ProjectInfo>
            <ProjectInfo>
              <a href={project.code} target="_blank" rel="noreferrer">
                <span>Código</span> <i className="devicon-github-original"></i>
              </a>
              <a href={project.live} target="_blank" rel="noreferrer">
                <span>Live Demo</span>{' '}
                <img src={redirect} alt="Link de redirecionamento" />
              </a>
            </ProjectInfo>
          </div>
        </Project>
      ))}
    </ProjectSection>
  )
}

export default Projects
