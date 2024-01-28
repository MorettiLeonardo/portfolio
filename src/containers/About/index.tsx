import coffeImage from '../../static/coffee.avif'
import { BlueParagraph, Title } from '../../style'
import { Section, Image } from './style'

const About = () => {
  return (
    <Section>
      <Image
        src={coffeImage}
        alt="Imagem de uma mesa com um café e um notebook"
      />
      <div>
        <BlueParagraph>Sobre mim</BlueParagraph>
        <Title>
          Desenvolvedor Front-end React que mora em Curitiba, Paraná.
        </Title>
        <p>
          Olá, meu nome é Leonardo e sou desenvolvedor front-end. Minha paixão é
          criar e desenvolver uma UI/UX limpa para meus usuários.
        </p>
        <p>
          Minhas principais habilidades atualmente são React/Vue.js em
          combinação com Styled-Components e TypeScript.
        </p>
      </div>
    </Section>
  )
}

export default About
