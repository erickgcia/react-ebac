import '../../index.css'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const NavStyled = styled.nav`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
`

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

const NavListItem = styled.li`
  font-size: var(--fontSize-sm);
  font-weight: 500;
  list-style: none;
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: var(--gray);
  transition: all 300ms ease;
  &:hover {
    color: var(--white);
  }
`

export { NavStyled, NavList, NavListItem, StyledNavLink } 