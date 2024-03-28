import { Link } from 'react-router-dom'

export const ErrorPage = () => {
  return(
    <section className='error'>
      <div className='error__box error__box--col'>
        <h1>404 Error | Something went wrong</h1>
        <p>Go back to the main page 👇</p>
        <div className='error__box'>
          <Link className='error__link' to='/'>Home</Link>
          <Link className='error__link' to='/products'>Products</Link>
          <Link className='error__link' to='/customers'>Customers</Link>
        </div>
      </div>
    </section>
  )
}