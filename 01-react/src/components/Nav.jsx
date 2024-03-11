export const Nav = ({list}) => {
  return(
    <nav className='nav'>
      <ul className='nav__list'>
      {list.map((item, index) => (
      <li className='nav__list-item' key={index}>
        <a className='nav__list-link' href={`${item}.jsx`} key={index}>{item}</a>
      </li>
      ))}
      </ul>
    </nav>
  )
}