import { useEffect, useState } from "react"
import axios from 'axios'

export const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        setProducts(response.data)
        setLoading(false)
      } catch(err) {
        console.error(err)
      }
    }

    fetchData()
  }, [])

  return (
    <article className="products">
      {loading ?
        <div className='loading'>
          <h1>Loading...</h1>
        </div> :
        products.map((product, index) => (
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