import { Button } from '../Button/Button.ts'
import { Nav } from '../Nav/Nav.tsx'
import { Link } from 'react-router-dom'
import { HeaderStyled, Logo } from './styles.ts'
import { ButtonWrapper } from '../Button/styles.ts'

export const Header = ({ data }) => {
  return (
    <HeaderStyled>
      <Link to="/">
        <Logo src={data.logo} alt={data.logoDesc} />
      </Link>
      <Nav list={data.list} />
      <ButtonWrapper>
        <Button text="Book a Demo" />
        <Button text="Log in" type="secondary" />
      </ButtonWrapper>
    </HeaderStyled>
  )
}
