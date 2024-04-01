import { Nav } from "../Nav/Nav.jsx"
import { Link } from 'react-router-dom'
import { StyledFooter } from "./styles.js"
import { Logo } from "../Header/styles.js"

export const Footer = ({data}) => {
  return (
    <StyledFooter>
      <Link to="/">
        <Logo src={data.logo} alt={data.logoDesc} />
      </Link>
      <Nav list={data.list} href={data.list} />
    </StyledFooter>
  )
}