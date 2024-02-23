import { Nav, Menu, Logo, Itens } from './style'

const Navbar = () => {
  return (
    <Nav>
      <Logo>Leonardo.dev</Logo>
      <Menu>
        <Itens>
          <a href="#">inicio</a>
        </Itens>
        <Itens>
          <a href="#about">Sobre</a>
        </Itens>
        <Itens>
          <a href="#projects">Projetos</a>
        </Itens>
        <Itens>
          <a href="#contact">Contato</a>
        </Itens>
      </Menu>
    </Nav>
  )
}

export default Navbar
