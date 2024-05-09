import { Link } from 'react-router-dom'
import UserCard from '../components/UserCard'
import { useUsers } from '../hooks/useUsers'

function Users() {
  const { users } = useUsers()

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
    <>
      <header className="header justify-between">
        <h1 className="text-2xl font-bold">Users Page</h1>
        <Link
          className="text-xl font-semibold hover:text-blue-500 transition-all duration-200"
          to="/"
        >
          Home
        </Link>
      </header>
      <main>
        <article className="grid-autofill gap-4 p-8">
          {users ? (
            users.map((user) => (
              <Link key={user.id} to={`/users/${user.username}`}>
                <UserCard user={user} getDepartmentClass={getDepartmentClass} />
              </Link>
            ))
          ) : (
            <span className="text-xl text-center md:text-3xl font-bold text-nowrap">
              No users available.
            </span>
          )}
        </article>
      </main>
    </>
  )
}

export default Users
