import { ErrorLink, ErrorWrapper, StyledError } from "./styles"


export const Error = ({direction}) => {
  return (
    <StyledError>
      <ErrorWrapper direction={direction}>
        <h1>404 Error | Something went wrong</h1>
        <p>Go back to the main page 👇</p>
        <ErrorWrapper>
          <ErrorLink to='/'>Home</ErrorLink>
          <ErrorLink to='/products'>Products</ErrorLink>
          <ErrorLink to='/customers'>Customers</ErrorLink>
        </ErrorWrapper>
      </ErrorWrapper>
    </StyledError>
  )
}