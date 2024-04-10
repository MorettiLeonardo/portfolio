import { Container, Social } from '../../style'

import { FooterContainer } from './styles'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <FooterContainer>
      <Container>
        <p>Copyright &copy; {currentYear}. Todos os direitos reservados</p>
        <div>
          <Social
            color="white"
            target="_blank"
            href="https://www.linkedin.com/in/leonardo-frontend-dev/"
            rel="noreferrer"
          >
            <i className="devicon-linkedin-plain"></i>
          </Social>
          <Social
            color="white"
            target="_blank"
            href="https://github.com/MorettiLeonardo"
            rel="noreferrer"
          >
            <i className="devicon-github-original"></i>
          </Social>
        </div>
      </Container>
    </FooterContainer>
  )
}

export default Footer
