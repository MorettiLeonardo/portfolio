import styled, { keyframes } from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 1.7rem 3.2rem;
  color: #2d2e32;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
  background-color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
`

export const Logo = styled.a`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`

export const Menu = styled.ul`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`

type Props = { open: boolean }

export const Overlay = styled.div<Props>`
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  top: 0;
  z-index: 1;
  background-color: #fff;
  gap: 30px;

  animation: ${({ open }) => (open ? slideInAnimation : slideOutAnimation)} 0.3s
    ease-in-out forwards;

  a {
    font-size: 26px;
    font-weight: 500;
  }

  button {
    position: absolute;
    top: 30px;
    right: 50px;
  }

  @media (min-width: 769px) {
    display: none;
  }
`

const slideInAnimation = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`

const slideOutAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`

export const MenuButton = styled.button`
  display: none;
  background-color: #fff;
  border: none;
  cursor: pointer;

  img {
    max-width: 30px;
  }

  @media (max-width: 768px) {
    display: block;
  }
`

export const Itens = styled.li`
  font-weight: 600;
  font-size: 17px;
  cursor: pointer;
  transition: 0.2s;

  a {
    color: #2d2e32;
    transition: 0.3s;

    &:hover {
      color: #007acc;
    }
  }
`
