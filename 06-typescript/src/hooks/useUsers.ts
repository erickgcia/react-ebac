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
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/users?limit=20`)
        const data = await response.data
        setUsers(data.users)
      } catch (err) {
        console.error(err)
      }
    }

    fetchUsers()
  }, [])

  return { users }
}
