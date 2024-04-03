import '../../index.css'
import styled from 'styled-components'

const CardsContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-template-rows: auto;
  place-items: center;
  gap: 2rem;
  padding: 3rem;
  box-sizing: border-box;
`

export { CardsContainer }
