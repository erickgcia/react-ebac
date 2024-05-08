import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type Company = {
  department: string
}

type UserParams = {
  firstName: string
  email: string
  id: string
  image: string
  company: Company
}

function Users() {
  const [users, setUsers] = useState<UserParams[]>([])
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users?limit=20')
        if (!response.ok) {
          throw new Error('Failed to fetch users')
        }
        const data = await response.json()
        setUsers(data.users)
      } catch (err) {
        console.error(err)
      }
    }

    fetchUsers()
  }, [])

  const getDepartmentClass = (department: string): string => {
    switch (department) {
      case 'Marketing':
        return 'bg-blue-400'
      case 'Accounting':
        return 'bg-yellow-400'
      case 'Services':
        return 'bg-red-400'
      case 'Human Resources':
        return 'bg-slate-400'
      case 'Product Management':
        return 'bg-pink-400'
      case 'Business Development':
        return 'bg-orange-400'
      case 'Support':
        return 'bg-cyan-400'
      case 'Sales':
        return 'bg-emerald-400'
      case 'Research and Development':
        return 'bg-indigo-400'
      default:
        return 'bg-neutral-400'
    }
  }

  return (
    <main>
      <header className="flex items-center justify-between py-6 px-8 bg-slate-200">
        <h1 className="text-2xl font-bold">Users Page</h1>
        <Link
          className="text-xl font-semibold hover:text-blue-500 transition-all duration-200"
          to="/"
        >
          Home
        </Link>
      </header>
      <article className="grid-autofill gap-4 p-8">
        {users ? (
          users.map((user: UserParams) => (
            <div
              key={user.id}
              className={`border-2 rounded-lg p-4 border-neutral-800
                ${getDepartmentClass(user.company.department)}
              `}
            >
              <img className="w-full p-8" src={user.image} alt="user image" />
              <p className="text-lg font-bold">{user.firstName}</p>
              <p className="text-base font-medium text-slate-600">
                {user.company.department}
              </p>
              <p className="text-base font-medium text-slate-600">
                {user.email}
              </p>
            </div>
          ))
        ) : (
          <p>No users available.</p>
        )}
      </article>
    </main>
  )
}

export default Users
