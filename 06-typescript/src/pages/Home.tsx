import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

function Home() {
  useGSAP(() => {
    gsap.to('.g_title', {
      opacity: 1,
      x: 0,
      duration: 1,
    })

    gsap.to('.g_button', {
      opacity: 1,
      y: 0,
      duration: 0.4,
    })
  }, [])

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
      <main className="flex flex-col items-center justify-center gap-4">
        <h2 className="g_title text-2xl md:text-6xl text-white font-bold p-8">
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
        <Link to="/users">
          <button className="g_button btn text-white text-center bg-emerald-300 text-lg md:text-3xl py-2 px-8 font-semibold hover:bg-blue-300 transition-all duration-200">
            See the users
          </button>
        </Link>
      </main>
    </>
  )
}

export default Home
