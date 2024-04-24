import { useFetch } from '../../hooks/useFetch.tsx'
import { Loading } from '../Loading/Loading.ts'
import {
  Card,
  CardImg,
  ProductDescription,
  ProductPrice,
  ProductTitle,
  ProductWrapper,
  StyledProducts,
} from './styles.js'

export const Products = () => {
  const { data, isLoading, error } = useFetch({
    url: 'https://fakestoreapi.com/products',
    type: 'get',
  })
  if (error) <div>{error.message}</div>

  return (
    <StyledProducts>
      {isLoading ? (
        <Loading text="products" />
      ) : (
        data.map((product, index) => (
          <Card key={index}>
            <CardImg src={product.image} alt={product.title} />
            <ProductWrapper className="products__wrapper">
              <ProductTitle>{product.title}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{`$ ${product.price.toFixed(2)}`}</ProductPrice>
            </ProductWrapper>
          </Card>
        ))
      )}
    </StyledProducts>
  )
}
