import { useState } from 'react'

import menu from '../../static/more.png'
import close from '../../static/close.png'

import * as S from './style'

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
      <S.Nav onSubmit={(e) => e.preventDefault()}>
        <S.Logo>Leonardo.dev</S.Logo>
        <S.MenuButton onClick={toggle}>
          <img src={menu} alt="Menu" />
        </S.MenuButton>
        <S.Menu>
          <S.Itens>
            <a onClick={(ev) => scroll(ev, 0, 0)}>inicio</a>
          </S.Itens>
          <S.Itens>
            <a onClick={(ev) => scroll(ev, 0, 800)}>Sobre</a>
          </S.Itens>
          <S.Itens>
            <a onClick={(ev) => scroll(ev, 0, 1250)}>Projetos</a>
          </S.Itens>
          <S.Itens>
            <a onClick={(ev) => scroll(ev, 0, 2500)}>Contato</a>
          </S.Itens>
        </S.Menu>
      </S.Nav>
      <S.Overlay open={isOpen}>
        <S.MenuButton onClick={() => toggle()}>
          <img src={close} alt="Fechar" />
        </S.MenuButton>
        <S.Itens>
          <a onClick={(ev) => (scroll(ev, 0, 0), setIsOpen(false))}>inicio</a>
        </S.Itens>
        <S.Itens>
          <a onClick={(ev) => (scroll(ev, 0, 1100), setIsOpen(false))}>Sobre</a>
        </S.Itens>
        <S.Itens>
          <a onClick={(ev) => (scroll(ev, 0, 1500), setIsOpen(false))}>
            Projetos
          </a>
        </S.Itens>
        <S.Itens>
          <a onClick={(ev) => (scroll(ev, 0, 4500), setIsOpen(false))}>
            Contato
          </a>
        </S.Itens>
      </S.Overlay>
    </div>
  )
}

export default Navbar
