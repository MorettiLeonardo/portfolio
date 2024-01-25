import Hero from './containers/Hero'
import Navbar from './containers/Navbar'
import GlobalStyle, { Container } from './style'

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Hero />
      </Container>
    </>
  )
}

export default App
