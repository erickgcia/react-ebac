import { HeaderSection, StyledHeader, StyledLogo } from './styles'
import { Nav } from '../Nav'
import { SearchForm } from '../SearchForm'
import { Cart } from '../Cart'
import { useDispatch, useSelector } from 'react-redux'
import { checkCart } from '../../actions'

export const Header = () => {
  const list = ['Men', 'Women', 'Kids', 'Accesories']
  const dispatch = useDispatch()
  const visible = useSelector((state) => state.data.cartVisible)

  const handleVisibleCart = () => {
    dispatch(checkCart(!visible))
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
          onClick={handleVisibleCart}
        />
      </HeaderSection>
      <Cart visible={visible} />
    </StyledHeader>
  )
}
