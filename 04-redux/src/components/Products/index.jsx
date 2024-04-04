import productsData from '../../constants/products'
import { Card } from './Card'
import { CardsContainer } from './styles'

export const Products = () => {
  return (
    <main>
      <CardsContainer>
        {productsData.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </CardsContainer>
    </main>
  )
}
