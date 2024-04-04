import { HeaderSection, StyledHeader, StyledLogo } from './styles'
import { Nav } from '../Nav'
import { SearchForm } from '../SearchForm'
import { useEffect, useState } from 'react'
import { Cart } from '../Cart'
import { useSelector } from 'react-redux'

export const Header = () => {
  const list = ['Men', 'Women', 'Kids', 'Accesories']
  const [isCartVisible, setIsCartVisible] = useState(false)
  const cart = useSelector((state) => state.data.cart)
  const handleToggleClick = () => {
    setIsCartVisible(!isCartVisible)
  }

  useEffect(() => {
    if (cart.length === 1) {
      return setIsCartVisible(true)
    }
    if (cart.length === 0) {
      return setIsCartVisible(false)
    }
  }, [handleToggleClick])
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
      <Cart show={isCartVisible} />
    </StyledHeader>
  )
}
