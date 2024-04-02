import '../../index.css'
import styled from 'styled-components'

const Label = styled.label`
  position: relative;
`

const StyledInput = styled.input`
  font-family: var(--fontStack);
  border: none;
  border-radius: 20px;
  padding-block: 0.75rem;
  padding-left: 2.75rem;
  background-color: var(--gray);

  &::placeholder {
    color: var(--black);
    font-size: 1.125rem;
    opacity: 0.25;
    font-weight: 700;
  }
`

export { Label, StyledInput }
