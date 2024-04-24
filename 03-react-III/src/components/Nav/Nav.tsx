import { NavList, NavListItem, NavStyled, StyledNavLink } from './styles'

export const Nav = ({list}) => {
  return(
    <NavStyled >
      <NavList>
        {
          list.map((listValue, index) => (
          <NavListItem key={index}>
            <StyledNavLink to={`/${listValue.toLowerCase()}`} key={index}>
              {listValue}
            </StyledNavLink>
          </NavListItem>
          ))
        }
      </NavList>
    </NavStyled>
  )
}