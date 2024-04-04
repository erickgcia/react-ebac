import { useSelector } from 'react-redux'
import { Card } from '../Products/Card'
import { CartButton, CartSection, CartTitle, EmptyCart } from './styles'

export const Cart = ({ visible }) => {
  const cart = useSelector((state) => state.data.cart)
  return (
    <CartSection visible={visible}>
      <CartTitle>Cart</CartTitle>
      <section>
        {cart.length > 0 ? (
          cart.map((product) => (
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
