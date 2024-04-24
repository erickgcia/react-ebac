import '../../index.css'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  font-size: var(--fontSize-sm);
  padding: 0.5rem 1rem;
  border-radius: 10px;
  background-color: ${props => props.type === 'secondary' ? 'transparent' : 'var(--blue)'};
  font-weight: 500;
  color: var(--white);
  transition: all 300ms ease;
  border: 1px solid transparent;

  &:hover {
    background-color: ${props => props.type === 'secondary' ? 'unset' : 'var(--darkBlue)'};
    border: 1px solid var(--white);
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export { ButtonStyled, ButtonWrapper }