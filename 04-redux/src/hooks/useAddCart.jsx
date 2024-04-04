import { useState } from 'react'

export const useAddCart = () => {
  const [cartProducts, setCartProducts] = useState([])

  const addProduct = (product) => {
    setCartProducts([...cartProducts, product])
  }

  return { cartProducts, addProduct }
}
