import { Link } from 'react-router-dom'

function Home(): JSX.Element {
  return (
    <header className="flex items-center justify-between py-6 px-8 bg-slate-200">
      <div className="flex items-center gap-6">
        <img
          className="rounded-full"
          src="https://picsum.photos/seed/picsum/40/40"
          alt="Random lorem picsum photo"
        />
        <h1 className="text-2xl font-bold">Home Page</h1>
      </div>
      <Link
        className="text-xl text-black-500 font-semibold hover:text-blue-400"
        to="/users"
      >
        Users
      </Link>
    </header>
  )
}

export default Home
