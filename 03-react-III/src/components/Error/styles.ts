import styled from 'styled-components'
import '../../index.css'
import { Link } from 'react-router-dom'

const StyledError = styled.section`
  display: grid;
  place-items: center;
  height: 100dvh;
`
const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.direction === 'column' ? 'column' : 'row'};
  align-items: center;
  justify-content: center;
  gap: 3rem;
  font-size: var(--fontSize-lg);
  font-weight: 700;
`
const ErrorLink = styled(Link)`
  font-size: var(--fontSize-md);
  color: var(--blue);
  transition: color 300ms ease;
  
  &:hover {
    color: var(--white);
  }
`

export { StyledError, ErrorWrapper, ErrorLink }