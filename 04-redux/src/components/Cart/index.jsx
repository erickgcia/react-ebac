import { useSelector } from 'react-redux'
import { Card } from '../Products/Card'
import { CartButton, CartSection, CartTitle, EmptyCart } from './styles'

export const Cart = ({ show }) => {
  const products = useSelector((state) => state.products.products)
  return (
    <CartSection show={show ? show : undefined}>
      <CartTitle>Cart</CartTitle>
      <section>
        {products.length > 0 ? (
          products.map((product) => (
            <Card display="cart" product={product} key={product.id} />
          ))
        ) : (
          <EmptyCart>Nothing yet in your cart...</EmptyCart>
        )}
      </section>
      <CartButton>Checkout</CartButton>
    </CartSection>
  )
}
