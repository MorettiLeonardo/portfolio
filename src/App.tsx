import About from './containers/About'
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
        <About />
      </Container>
    </>
  )
}

export default App
