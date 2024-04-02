import '../../index.css'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--silver);
  max-width: 100%;
  width: 100%;
  padding: 0.5rem 2rem;
  box-sizing: border-box;
  box-shadow: var(--black) 0px 0px 3px 0px;
`

const HeaderSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

const StyledLogo = styled.img`
  border-radius: 50%;
  width: 70;
  aspect-ratio: 1 / 1;
`

export { StyledHeader, HeaderSection, StyledLogo }
