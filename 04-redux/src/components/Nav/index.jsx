import { NavList, StyledNav } from './styles'

export const Nav = ({ list }) => {
  return (
    <StyledNav>
      <NavList>
        {list.map((item, index) => (
          <li key={index}>
            <a href="#">{item}</a>
          </li>
        ))}
      </NavList>
    </StyledNav>
  )
}
