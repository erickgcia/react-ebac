import { NavLink } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <main className="grid place-content-center place-items-center gap-8 h-dvh text-2xl text-white">
      <h1 className="text-4xl font-medium text-red-500">
        404 Error | Sorry this page does not exist.
      </h1>
      <h2 className="font-medium">Return to existing pages 👇</h2>
      <nav>
        <ul className="flex items-center justify-center gap-8 font-bold">
          <li>
            <NavLink to="/">Products</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
      </nav>
    </main>
  )
}
