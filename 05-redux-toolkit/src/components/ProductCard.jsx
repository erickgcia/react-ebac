import { useDispatch } from 'react-redux'
import { addProductToCart, removeProductFromCart } from '../app/cart/cartSlice'
import { useState } from 'react'

export const ProductCard = ({ product }) => {
  const { image, title, price, category, id } = product
  const dispatch = useDispatch()

  const [isProductAdded, setIsProductAdded] = useState(false)

  const buttonClassName = isProductAdded
    ? 'border-none rounded-lg bg-red-700 p-2 text-white'
    : 'border-none rounded-lg bg-blue-700 p-2 text-white'
  const buttonText = isProductAdded ? 'Remove Product' : 'Add to Cart'

  const handleClick = () => {
    setIsProductAdded(!isProductAdded)
    if (!isProductAdded) {
      dispatch(addProductToCart(product))
    } else {
      dispatch(removeProductFromCart(id))
    }
  }

  return (
    <section className="flex flex-col gap-4 p-8 bg-neutral-200 border border-black rounded-2xl w-full sm:w-80 font-semibold">
      <img
        className="w-full aspect-square object-cover object-center"
        src={image}
        alt={title}
      />
      <h3 className="text-lg font-bold">{title.slice(0, 20)}...</h3>
      <p>$ {price.toFixed(2)}</p>
      <p>Category: {category.charAt(0).toUpperCase() + category.slice(1)}</p>
      <button className={buttonClassName} onClick={handleClick}>
        {buttonText}
      </button>
    </section>
  )
}
