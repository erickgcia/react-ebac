import { useState } from 'react'
import productsData from '../../constants/products'
import { Card } from './Card'
import { CardsContainer } from './styles'

export const Products = () => {
  const [cartProducts, setCartProducts] = useState([])

  const addCartProduct = (product) => {
    setCartProducts([...cartProducts, product])
  }
  return (
    <main>
      <CardsContainer>
        {productsData.map((product) => (
          <Card
            key={product.id}
            img={product.img}
            itemStatus={product.itemStatus}
            title={product.title}
            description={product.description}
            colors={
              product.colors <= 1
                ? `${product.colors} Color`
                : `${product.colors} Colors`
            }
            price={`$ ${product.price}`}
            addCartProduct={addCartProduct}
          />
        ))}
      </CardsContainer>
    </main>
  )
}
