import { NavLink } from 'react-router-dom'

export const Nav = ({list}) => {
  return(
    <nav className='nav'>
      <ul className='nav__list'>
        {
          list.map((item, index) => (
          <li className='nav__list-item' key={index}>
            <NavLink
              className='nav__list-link'
              href={`${item}.jsx`}
              key={index}>
              {item}
            </NavLink>
          </li>
          ))
        }
      </ul>
    </nav>
  )
}