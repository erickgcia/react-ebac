import { ProductCard } from '../components/ProductCard'
import { useAxiosFetch } from '../hooks/useAxiosFetch'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SkeletonLayout } from '../components/SkeletonLayout'
import { LOADING } from '../app/status'

export const IndexPage = () => {
  const { data } = useAxiosFetch({
    url: 'https://fakestoreapi.com/products?limit=12',
  })

  const status = useSelector((status) => status.cart.status)

  const productCartCounter = useSelector((state) => state.cart.productCount)
  const navigate = useNavigate()
  return (
    <>
      <header className="flex items-center justify-between px-8 py-6 border-b-2 border-b-black sticky top-0 bg-white">
        <h1 className="text-center font-bold text-2xl">Products</h1>
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
        <article className="flex gap-4 flex-wrap items-center justify-center p-12">
          {status !== LOADING ? (
            data.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))
          ) : (
            <SkeletonLayout />
          )}
        </article>
      </main>
    </>
  )
}
