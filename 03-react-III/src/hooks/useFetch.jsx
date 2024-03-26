import { useState, useEffect } from "react"

export const useFetch = ({url}) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url)
        if(!response.ok) {
          throw new Error ('Error en el fetch')
        }
        const data = await response.json()
        setData(data)
      } catch(err) {
        console.error(err)
      }
    }

    fetchData(url)
  },[url])

  return data
}