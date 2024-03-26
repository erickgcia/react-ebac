import { Button } from './Button.jsx'
import { Nav } from './Nav.jsx'
import Logo from '../assets/react.svg'

export const Header = () => {
  const data = {
    logo: Logo,
    logoDesc: 'Description of the logo',
    list: ['Products', 'Government', 'Customers', 'Resources'],
  }

  return (
    <header className='header'>
      <img className='header__logo' src={data.logo} alt={data.logoDesc} />
      <Nav list={data.list} href={data.list} />
      <div className='btn-wrapper'>
        <Button text='Book a Demo' />
        <Button modifier='btn--transparent' text='Log in' />
      </div>
    </header>
  )
}
