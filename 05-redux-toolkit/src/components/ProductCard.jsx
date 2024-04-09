import { useDispatch } from 'react-redux'
import { addProductToCart } from '../app/cart/cartSlice'

export const ProductCard = ({ product }) => {
  const { image, title, price, category } = product
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(addProductToCart(product))
  }

  return (
    <section className="flex flex-col gap-4 p-8 border bg-gray-100 border-black rounded-2xl w-full sm:w-80 font-semibold">
      <img
        className="w-full aspect-square object-cover object-center"
        src={image}
        alt={title}
      />
      <h3 className="text-lg font-bold">{title.slice(0, 20)}...</h3>
      <p>$ {price.toFixed(2)}</p>
      <p>Category: {category.charAt(0).toUpperCase() + category.slice(1)}</p>
      <button
        className="border-none rounded-2xl bg-blue-700 p-2 text-white"
        onClick={handleClick}
      >
        Add to Cart
      </button>
    </section>
  )
}
