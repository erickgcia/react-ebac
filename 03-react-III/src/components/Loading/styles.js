import styled from 'styled-components'
import '../../index.css'

const StyledLoading = styled.div`
  display: grid;
  place-content: center;
  grid-area: 1 / 4 / 1 / 1;
  height: 100dvh;
  font-size: var(--fontSize-xl);
  font-weight: 500;
`

export { StyledLoading }