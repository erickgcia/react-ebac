import '../../index.css'
import styled from 'styled-components'

const Customers = styled.main`
  display: grid;
  place-content: center;
  padding: 3rem;
  gap: 3rem;
`

const Search = styled.input`
  border: none;
  border: 1px solid var(--white);
  box-shadow: var(--white) 0px 1px 10px 0px;
  width: 100%;
  color: var(--white);
  font-weight: 500;
  padding: 0.5rem;
  border-radius: 10px;
  background-color: var(--lightBlack);
`

const ScrollContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 3rem;
  height: 500px;
  overflow-y: scroll;
  scroll-snap-type: mandatory;
  scrollbar-width: thin;
  scroll-behavior: smooth;
`
const Table = styled.table`
  border: var(--darkBlue) 2px solid;
  border-collapse: collapse;
  box-shadow: var(--darkBlue) 0px 1px 10px 0px;
  tr {
    border: 1px solid var(--blue);
  }
  th,
  td {
    font-weight: 500;
    border: 1px solid var(--blue);
    padding: 0.75rem 2rem;
  }
`

export { Customers, Search, ScrollContainer, Table }