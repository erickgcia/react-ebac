import '../../index.css'
import styled from 'styled-components'

const CardsContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 1rem;
`

export { CardsContainer }