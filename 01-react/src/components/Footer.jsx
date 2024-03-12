import { Nav } from "./Nav.jsx"

export const Footer = () => {
  const list = ['Home', 'Products', 'About Us', 'Support', 'Terms & Conditions', 'License']
  return(
    <footer className='footer'>
      <Nav list={list} href={list} />
    </footer>
  )
}