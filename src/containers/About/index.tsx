import coffeImage from '../../static/coffee.avif'
import web_dev from '../../static/web_dev.svg'
import emoji_work from '../../static/working-emoji.png'

import { BlueParagraph, Title } from '../../style'
import { Section, CoffeImage, Emoji, Images, ImageText } from './style'

const About = () => {
  return (
    <Section>
      <Images>
        <CoffeImage
          src={coffeImage}
          alt="Imagem de uma mesa com um café e um notebook"
        />
        <ImageText src={web_dev} alt="Front-end Developer" />
        <Emoji src={emoji_work} alt="Emoji trabalhando" />
      </Images>
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
