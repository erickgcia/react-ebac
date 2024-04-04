import { Card } from './Card'
import { CardsContainer } from './styles'
import { useSelector } from 'react-redux'

export const Products = () => {
  const products = useSelector((state) => state.data.products)
  return (
    <main>
      <CardsContainer>
        {products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </CardsContainer>
    </main>
  )
}
