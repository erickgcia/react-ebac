import { Nav } from './Nav.jsx'

export const Header = () => {
  const list = ['Home', 'Products', 'About Us', 'Contact']

  return (
    <header className='header'>
      <img className='header__img' src="src/assets/img/logo.svg" alt="Logo" />
      <Nav list={list} href={list} />
    </header>
  )
}
