import { Link } from 'react-router-dom'

export const ErrorPage = () => {
  return(
    <section className='error'>
      <div className='error__box'>
        <h1>404 Error | Something went wrong</h1>
        <p>Go back to the main page 👇</p>
        <Link className='error__link' to='/'>Home</Link>
      </div>
    </section>
  )
}