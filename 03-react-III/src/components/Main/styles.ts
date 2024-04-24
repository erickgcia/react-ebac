import styled from 'styled-components'
import '../../index.css'

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem;
  width: 55%;

  @media screen and (width <= 1060px) {
    align-items: center;
    justify-content: center;
    width: unset;
  }
`

const MainTitle = styled.h1`
  font-size: var(--fontSize-2xl);
  font-weight: 500;
  color: var(--blue);
  span {
    color: var(--blue);
    animation: colorTickling 3s ease-in-out infinite;
  }
  @media screen and (width <= 1060px) {
    text-align: center;
  }
`
const MainSubtitle = styled.h2`
  line-height: 1.5;
  font-size: var(--fontSize-md);
`

export { StyledMain, MainTitle, MainSubtitle }