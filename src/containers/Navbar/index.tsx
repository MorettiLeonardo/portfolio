import { Nav, Menu, Logo, Itens } from './style'

const Navbar = () => {
  return (
    <Nav>
      <Logo>Leonardo.dev</Logo>
      <Menu>
        <Itens>Início</Itens>
        <Itens>Sobre</Itens>
        <Itens>Projetos</Itens>
        <Itens>Contato</Itens>
      </Menu>
    </Nav>
  )
}

export default Navbar
