import { Link, useParams } from 'react-router-dom'
import { useUsers } from '../hooks/useUsers'
import UserCard from '../components/UserCard'

function UserProfile() {
  const params = useParams<{ username: string }>()

  const { users } = useUsers()

  const currentUser = users.find((user) => user.username === params.username)

  return (
    <main>
      <header className="w-full header justify-between">
        <h1 className="text-xl md:text-3xl font-bold">
          {params.username} Page
        </h1>
        <div className="flex gap-6 items-center text-xl font-semibold">
          <Link
            className=" hover:text-blue-500 transition-all duration-200"
            to="/"
          >
            Home
          </Link>
          <Link
            className=" hover:text-blue-500 transition-all duration-200"
            to="/users"
          >
            Users
          </Link>
        </div>
      </header>
      {currentUser && (
        <section className="flex flex-col md:flex-row justify-center gap-16 w-full p-8">
          <div className="w-[300px]">
            <UserCard user={currentUser} getDepartmentClass={() => ''} />
          </div>
          <div className="text-balance w-[500px]">
            <strong className="text-xl md:text-4xl text-white block mb-4">
              Lorem, ipsum dolor.
            </strong>
            <p className="text-md text-slate-400 font-medium mb-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam eveniet voluptates voluptatibus obcaecati porro
              corporis at in illum consequuntur dolorem commodi veniam delectus
              culpa rerum quidem quaerat, fugit necessitatibus quam aperiam
              reiciendis id error! Voluptate harum nobis minima explicabo
              laboriosam?
            </p>
            <p className="text-md text-slate-400 font-medium ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum,
              ab! Nihil corporis laboriosam quisquam inventore!
            </p>
          </div>
        </section>
      )}
    </main>
  )
}

export default UserProfile
