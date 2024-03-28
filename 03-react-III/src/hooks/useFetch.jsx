import { useState, useEffect } from "react"
import axios from 'axios'

export const useFetch = ({url, type}) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios[type](url);
        setData(response.data);
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false);
      }
    };

    fetchData()
  },[url, type])

  return { data, isLoading, error }
}