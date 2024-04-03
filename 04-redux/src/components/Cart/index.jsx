import { useState } from 'react'
import { Card } from '../Products/Card'
import { CartButton, CartSection, CartTitle } from './styles'
import { useEffect } from 'react'

export const Cart = ({ isVisible }) => {
  const [isEmpty, setIsEmpty] = useState(true)

  return (
    <CartSection isVisible={isVisible}>
      <CartTitle>Cart</CartTitle>
      <section>
        {isEmpty ? <p>Nothing yet in your cart...</p> : <Card />}
      </section>
      <CartButton>Checkout</CartButton>
    </CartSection>
  )
}
