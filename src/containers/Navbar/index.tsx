import { Nav, Menu, Logo, Itens, MenuButton, Teste } from './style'

import menu from '../../static/more.png'
import close from '../../static/close.png'

import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  const scroll = (
    ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    cordX: number,
    cordY: number
  ) => {
    ev.preventDefault()
    window.scroll(cordX, cordY)
  }

  return (
    <div>
      <Nav onSubmit={(e) => e.preventDefault()}>
        <Logo>Leonardo.dev</Logo>
        <MenuButton onClick={toggle}>
          <img src={menu} alt="Menu" />
        </MenuButton>
        <Menu>
          <Itens>
            <a onClick={(ev) => scroll(ev, 0, 0)}>inicio</a>
          </Itens>
          <Itens>
            <a onClick={(ev) => scroll(ev, 0, 800)}>Sobre</a>
          </Itens>
          <Itens>
            <a onClick={(ev) => scroll(ev, 0, 1250)}>Projetos</a>
          </Itens>
          <Itens>
            <a onClick={(ev) => scroll(ev, 0, 2500)}>Contato</a>
          </Itens>
        </Menu>
      </Nav>
      <Teste open={isOpen}>
        <MenuButton onClick={() => toggle()}>
          <img src={close} alt="Fechar" />
        </MenuButton>
        <Itens>
          <a onClick={(ev) => (scroll(ev, 0, 0), setIsOpen(false))}>inicio</a>
        </Itens>
        <Itens>
          <a onClick={(ev) => (scroll(ev, 0, 1100), setIsOpen(false))}>Sobre</a>
        </Itens>
        <Itens>
          <a onClick={(ev) => (scroll(ev, 0, 1500), setIsOpen(false))}>
            Projetos
          </a>
        </Itens>
        <Itens>
          <a onClick={(ev) => (scroll(ev, 0, 4500), setIsOpen(false))}>
            Contato
          </a>
        </Itens>
      </Teste>
    </div>
  )
}

export default Navbar
