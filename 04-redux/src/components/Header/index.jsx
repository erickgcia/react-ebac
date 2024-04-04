import { HeaderSection, StyledHeader, StyledLogo } from './styles'
import { Nav } from '../Nav'
import { SearchForm } from '../SearchForm'
import { useState } from 'react'
import { Cart } from '../Cart'
import products from '../../constants/products'

export const Header = () => {
  const list = ['Men', 'Women', 'Kids', 'Accesories']
  const [isCartVisible, setIsCartVisible] = useState(false)

  const handleToggleClick = () => {
    setIsCartVisible(!isCartVisible)
  }
  return (
    <StyledHeader>
      <StyledLogo src="https://picsum.photos/55" alt="Random picture" />
      <Nav list={list} />
      <HeaderSection>
        <SearchForm />
        <i className="fa-regular fa-heart fa-lg" />
        <i
          className="fa-solid fa-cart-shopping fa-lg"
          onClick={handleToggleClick}
        />
      </HeaderSection>
      <Cart products={products} show={isCartVisible} />
    </StyledHeader>
  )
}
