import { BlueParagraph, Title } from '../../style'

import maps from '../../static/map.svg'
import email from '../../static/email_icon.svg'

import * as S from './styles'

const Contact = () => (
  <S.ContactContainer>
    <BlueParagraph>Contato</BlueParagraph>
    <Title>Não seja tímido, fale comigo! 👇</Title>
    <S.InfosContainer>
      <S.Infos>
        <S.IconBox>
          <img src={maps} alt="Imagem de um mapa" />
        </S.IconBox>
        <div>
          <h4>Localização</h4>
          <p>Curitiba, Paraná</p>
        </div>
      </S.Infos>
      <S.Infos>
        <S.IconBox>
          <img src={email} alt="Imagem de uma carta" />
        </S.IconBox>
        <div>
          <h4>Email</h4>
          <p>leonardonabarro2003@gmail.com</p>
        </div>
      </S.Infos>
    </S.InfosContainer>
  </S.ContactContainer>
)

export default Contact
