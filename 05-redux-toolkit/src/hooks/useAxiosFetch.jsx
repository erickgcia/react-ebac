import { useEffect, useState } from 'react'
import axios from 'axios'

export const useAxiosFetch = ({ url }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url)
        setData(res.data)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [url])

  return { data, loading }
}
