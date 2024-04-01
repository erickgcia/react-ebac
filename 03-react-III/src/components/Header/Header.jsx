import { Button } from '../Button/Button.jsx'
import { Nav } from '../Nav/Nav.jsx'
import { Link } from 'react-router-dom'
import { HeaderStyled, Logo } from './styles.js'
import { ButtonWrapper } from '../Button/styles.js'

export const Header = ({data}) => {
  return (
    <HeaderStyled>
      <Link to="/">
        <Logo src={data.logo} alt={data.logoDesc} />
      </Link>
      <Nav list={data.list} />
      <ButtonWrapper>
        <Button text='Book a Demo' />
        <Button text='Log in' type='secondary' />
      </ButtonWrapper>
    </HeaderStyled>
  )
}
