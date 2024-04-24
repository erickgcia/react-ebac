import styled from 'styled-components'
import '../../index.css'

const HeaderStyled = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  padding: 1.5rem 4rem;
  border-bottom: 1px solid var(--gray);
`

const Logo = styled.img`
  width: 50px;
`

export { HeaderStyled, Logo }