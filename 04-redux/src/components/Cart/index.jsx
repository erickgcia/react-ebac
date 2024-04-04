import { useAddCart } from '../../hooks/useAddCart'
import { Card } from '../Products/Card'
import { CartButton, CartSection, CartTitle, EmptyCart } from './styles'

export const Cart = ({ products, show }) => {
  const addProduct = useAddCart()

  return (
    <CartSection show={show ? show : undefined}>
      <CartTitle>Cart</CartTitle>
      <section>
        {products.map((product) => (
          <Card display="cart" product={product} addProduct={addProduct} />
        ))}
      </section>
      <CartButton>Checkout</CartButton>
    </CartSection>
  )
}
