import { Link } from 'react-router-dom'

function Home(): JSX.Element {
  return (
    <>
      <header className="header justify-between">
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
      <main>
        <h2 className="text-2xl md:text-5xl text-center text-white font-bold p-8">
          Check out the users page
        </h2>
        <p className="text-balance text-xl md:text-2xl text-white px-16 text-center mb-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, quas!
          Soluta, laboriosam non? Harum suscipit quisquam necessitatibus
          sapiente obcaecati assumenda ut minus possimus quasi deserunt natus,
          iure voluptates quidem recusandae. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Vel eveniet assumenda optio deserunt
          numquam perspiciatis maxime autem ipsam nostrum ratione.
        </p>
        <p className="text-balance text-xl md:text-2xl text-white px-16 text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, quas!
          Soluta, laboriosam non? Harum suscipit quisquam necessitatibus
          sapiente obcaecati assumenda ut minus possimus quasi deserunt natus,
          iure voluptates quidem recusandae. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ipsum, officiis? Quod quisquam aliquid
          ullam eaque soluta minus doloremque dolorem expedita?
        </p>
      </main>
    </>
  )
}

export default Home
