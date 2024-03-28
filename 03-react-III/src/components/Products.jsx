import { useFetch } from "../hooks/useFetch"
import { Loading } from "./Loading"

export const Products = () => {
  const { data , isLoading, error } = useFetch({url: 'https://fakestoreapi.com/products', type: 'get'})
  if(error) (<div>{error.message}</div>)

  return (
    <article className="products">
      {isLoading ?
        <Loading text='products'/> :
        data.map((product, index) => (
          <section key={index} className="products__card">
            <img className="products__card-img" src={product.image} alt={product.title} />
            <div className='products__wrapper'>
              <h3 className="products__wrapper-title">{product.title}</h3>
              <p>{product.description}</p>
              <span className="products__price">{`$ ${product.price.toFixed(2)}`}</span>
            </div>
          </section>
        ))
      }
    </article>
  )
}