import { useEffect, useState } from 'react'
import axios from 'axios'

type Company = {
  department: string
}

type UserParams = {
  firstName?: string
  lastName?: string
  age?: string
  username: string
  email: string
  id: string
  image: string
  birthDate?: string
  university?: string
  company: Company
}

export function useUsers() {
  const [users, setUsers] = useState<UserParams[]>([])
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/users?limit=20`)
        const data = await response.data
        setUsers(data.users)
      } catch (err) {
        setError('Something went wrong.')
        console.log(`Something went wrong. ${err}`)
      }
    }

    fetchUsers()
  }, [])

  return { users, error }
}
