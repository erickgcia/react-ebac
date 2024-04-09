import { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../app/cart/cartSlice'

export const useAxiosFetch = ({ url }) => {
  const [data, setData] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchProducts.pending())
        const res = await axios.get(url)
        dispatch(fetchProducts.fulfilled(res.data))
        setData(res.data)
      } catch (err) {
        dispatch(fetchProducts.rejected(err))
        console.log(err)
      }
    }
    fetchData()
  }, [url, dispatch])

  return { data }
}
