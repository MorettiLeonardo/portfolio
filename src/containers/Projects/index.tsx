import { BlueParagraph, Title } from '../../style'
import {
  Project,
  ProjectImage,
  ProjectInfo,
  ProjectSection,
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
      'descrição do projeto... Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, consequatur illum alias aut cumque excepturi. Dolor doloribus eos iure blanditiis?',
    techs: ['ReactTS', 'Styled Components'],
    code: 'https://github.com/MorettiLeonardo/eplay',
    live: '#',
    tagIcon: `${gaming}`,
    side: 'left'
  },
  {
    name: 'EFOOD',
    cover: `${efood}`,
    description:
      'descrição do projeto... Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, consequatur illum alias aut cumque excepturi. Dolor doloribus eos iure blanditiis?',
    techs: ['ReactTS', 'Styled Components'],
    code: 'https://github.com/MorettiLeonardo/efood',
    live: '#',
    tagIcon: `${food}`,
    side: 'right'
  },
  {
    name: 'Task List',
    cover: `${taskList}`,
    description:
      'Um aplicativo de gestão de tarefas altamente personalizável e intuitivo, projetado para ajudá-lo a organizar suas atividades diárias com eficiência.',
    techs: ['ReactTS', 'Styled Components', 'Redux'],
    code: 'https://github.com/MorettiLeonardo/minhas-tarefas',
    live: 'https://minhas-tarefas-gilt.vercel.app/',
    tagIcon: `${task}`,
    side: 'left'
  }
]

const Projects = () => {
  return (
    <ProjectSection id="projects">
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
              {project.techs.map((tech) => (
                <h4 key={tech}>{tech}</h4>
              ))}
            </ProjectInfo>
            <ProjectInfo>
              <a href={project.code} target="_blank" rel="noreferrer">
                Código <i className="devicon-github-original"></i>
              </a>
              <a href={project.live} target="_blank" rel="noreferrer">
                Live Demo <img src={redirect} alt="Link de redirecionamento" />{' '}
              </a>
            </ProjectInfo>
          </div>
        </Project>
      ))}
    </ProjectSection>
  )
}

export default Projects
