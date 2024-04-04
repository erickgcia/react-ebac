import productsData from '../../constants/products'
import { Card } from './Card'
import { CardsContainer } from './styles'
import { useAddCart } from '../../hooks/useAddCart'

export const Products = () => {
  const addProduct = useAddCart()

  return (
    <main>
      <CardsContainer>
        {productsData.map((product) => (
          <Card product={product} key={product.id} addProduct={addProduct} />
        ))}
      </CardsContainer>
    </main>
  )
}
