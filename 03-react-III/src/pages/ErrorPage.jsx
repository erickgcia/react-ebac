import { Link } from 'react-router-dom'

export const ErrorPage = () => {
  return(
    <section>
      <div>
        <h1>Oops | 404 Error</h1>
        <h2>Something went wrong</h2>
      </div>
        <Link to='/'>Home</Link>
    </section>
  )
}