import About from './containers/About'
import Contact from './containers/Contact'
import Footer from './containers/Footer'
import Hero from './containers/Hero'
import Navbar from './containers/Navbar'
import Projects from './containers/Projects'
import GlobalStyle, { Container } from './style'

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Container>
      <Footer />
    </>
  )
}

export default App
