import styled from 'styled-components'

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
`

export const Logo = styled.a`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`

export const Menu = styled.ul`
  display: flex;
  gap: 2rem;
`

export const Itens = styled.li`
  font-weight: 600;
  font-size: 17px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: #007acc;
  }
`
