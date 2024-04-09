import { ProductCard } from '../components/ProductCard'
import { useAxiosFetch } from '../hooks/useAxiosFetch'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SkeletonLayout } from '../components/SkeletonLayout'

export const IndexPage = () => {
  const { data, loading } = useAxiosFetch({
    url: 'https://fakestoreapi.com/products?limit=10',
  })

  const productCartCounter = useSelector((state) => state.cart.productCount)
  const navigate = useNavigate()
  return (
    <>
      <header className="flex items-center justify-between px-8 py-4">
        <h1 className="text-center text-white font-bold text-2xl">Products</h1>
        <div className="relative w-14">
          <i
            onClick={() => navigate('/cart')}
            className="text-3xl cursor-pointer"
          >
            🛒
          </i>
          <button
            aria-label="counter"
            className="flex items-center justify-center border border-white rounded-full w-5 h-5 bg-red-500 font-bold p-3 text-white text-md absolute right-0 top-0"
          >
            {productCartCounter}
          </button>
        </div>
      </header>
      <main>
        <article className="flex gap-4 flex-wrap items-center justify-center p-4">
          {!loading ? (
            data.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))
          ) : (
            <SkeletonLayout />
          )}
        </article>
      </main>
    </>
  )
}
