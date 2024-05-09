import { Link, useParams } from 'react-router-dom'
import { useUsers } from '../hooks/useUsers'
import UserCard from '../components/UserCard'

function UserProfile() {
  const params = useParams<{ username: string }>()

  const { users } = useUsers()

  const currentUser = users.find((user) => user.username === params.username)

  return (
    <>
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
      <main>
        {currentUser && (
          <article className="flex flex-col md:flex-row justify-center gap-16 w-full p-8">
            <section className="w-[300px]">
              <UserCard user={currentUser} getDepartmentClass={() => ''} />
            </section>
            <section className="text-balance w-[500px]">
              <strong className="text-xl md:text-4xl text-white block mb-4">
                {currentUser.firstName + ' ' + currentUser.lastName}
              </strong>
              <form>
                <table className="border-2 text-white border-white border-collapse w-full my-8 text-center">
                  <thead className="">
                    <tr className="">
                      <th className="py-2 px-4 border-2 border-white">
                        University
                      </th>
                      <th className="py-2 px-4 border-2 border-white">Age</th>
                      <th className="py-2 px-4 border-2 border-white">
                        Birth Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-2 border-white">
                        {currentUser.university}
                      </td>
                      <td className="py-2 px-4 border-2 border-white">
                        {currentUser.age} yo
                      </td>
                      <td className="py-2 px-4 border-2 border-white">
                        {currentUser.birthDate}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
              <p className="text-md text-slate-400 font-medium mb-4 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam eveniet voluptates voluptatibus obcaecati porro
                corporis at in illum consequuntur dolorem commodi veniam
                delectus culpa rerum quidem quaerat, fugit necessitatibus quam
                aperiam reiciendis id error! Voluptate harum nobis minima
                explicabo laboriosam?
              </p>
            </section>
          </article>
        )}
      </main>
    </>
  )
}

export default UserProfile
