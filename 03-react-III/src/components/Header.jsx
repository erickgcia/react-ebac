import { Button } from './Button.jsx'
import { Nav } from './Nav.jsx'
import { Link } from 'react-router-dom'

export const Header = ({data}) => {
  return (
    <header className='header'>
      <Link to="/">
        <img className='header__logo' src={data.logo} alt={data.logoDesc} />
      </Link>
      <Nav list={data.list} />
      <div className='btn-wrapper'>
        <Button text='Book a Demo' />
        <Button modifier='btn--transparent' text='Log in' />
      </div>
    </header>
  )
}
