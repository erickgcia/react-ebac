import '../../index.css'
import styled from 'styled-components'

const BrandsSection = styled.section`
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 2rem;
`

const BrandsLogo = styled.img`
  width: min(80px, 15%);
`
export { BrandsSection , BrandsLogo }