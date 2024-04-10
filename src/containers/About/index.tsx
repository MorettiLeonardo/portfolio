import coffeImage from '../../static/coffee.avif'
import web_dev from '../../static/web_dev.svg'
import emoji_work from '../../static/working-emoji.png'

import { BlueParagraph, Title } from '../../style'
import * as S from './style'

const About = () => {
  return (
    <S.Section>
      <S.Images>
        <S.CoffeImage
          src={coffeImage}
          alt="Imagem de uma mesa com um café e um notebook"
        />
        <S.ImageText src={web_dev} alt="Front-end Developer" />
        <S.Emoji src={emoji_work} alt="Emoji trabalhando" />
      </S.Images>
      <S.Spare />
      <S.AboutText>
        <BlueParagraph>Sobre mim</BlueParagraph>
        <Title>
          Desenvolvedor Front-end React que mora em Curitiba, Paraná
        </Title>
        <p>
          Olá, meu nome é Leonardo e sou desenvolvedor front-end. Minha paixão é
          criar e desenvolver uma UI/UX limpa para meus usuários
        </p>
        <p>
          Minhas principais habilidades atualmente são React, Redux em
          combinação com Styled-Components e TypeScript
        </p>
      </S.AboutText>
    </S.Section>
  )
}

export default About
