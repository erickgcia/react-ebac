import '../../index.css'
import styled from 'styled-components'

const StyledNav = styled.nav`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15%;
`

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  li {
    font-weight: 500;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: var(--black);
  }
`

export { StyledNav, NavList }
