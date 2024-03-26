import { NavLink } from 'react-router-dom'

export const Nav = ({list}) => {
  return(
    <nav className='nav'>
      <ul className='nav__list'>
        {
          list.map((listValue, index) => (
          <li className='nav__list-item' key={index}>
            <NavLink
              className='nav__list-link'
              to={`/${listValue.toLowerCase()}`}
              key={index}>
              {listValue}
            </NavLink>
          </li>
          ))
        }
      </ul>
    </nav>
  )
}