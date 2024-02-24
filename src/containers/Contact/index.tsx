import { BlueParagraph, Title } from '../../style'
import { ContactContainer, IconBox, Infos, InfosContainer } from './styles'

import maps from '../../static/map.svg'
import email from '../../static/email_icon.svg'

const Contact = () => (
  <ContactContainer>
    <BlueParagraph>Contato</BlueParagraph>
    <Title>Não seja tímido! fale comigo! 👇</Title>
    <InfosContainer>
      <Infos>
        <IconBox>
          <img src={maps} alt="Imagem de um mapa" />
        </IconBox>
        <div>
          <h4>Localização</h4>
          <p>Curitiba, Paraná</p>
        </div>
      </Infos>
      <Infos>
        <IconBox>
          <img src={email} alt="Imagem de uma carta" />
        </IconBox>
        <div>
          <h4>Email</h4>
          <p>leonardonabarro2003@gmail.com</p>
        </div>
      </Infos>
    </InfosContainer>
  </ContactContainer>
)

export default Contact
