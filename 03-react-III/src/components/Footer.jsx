import { Nav } from "./Nav.jsx"
import { Link } from 'react-router-dom'

export const Footer = ({data}) => {
  return (
    <footer className='footer'>
      <Link to="/">
        <img className='header__logo' src={data.logo} alt={data.logoDesc} />
      </Link>
      <Nav list={data.list} href={data.list} />
    </footer>
  )
}