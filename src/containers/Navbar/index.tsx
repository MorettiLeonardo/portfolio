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
        <Itens>Projetos</Itens>
        <Itens>Contato</Itens>
      </Menu>
    </Nav>
  )
}

export default Navbar
