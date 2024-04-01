import '../../index.css'
import styled from 'styled-components'

const StyledProducts = styled.article`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  row-gap: 2rem;
  padding: 4rem;

  @media screen and (width <= 1060px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.section`
  background-color: var(--lightBlack);
  border-radius: 20px;
  width: 400px;
  height: 300px;
  display: flex;
  align-items: center;
  gap: 1rem;
  overflow-y: scroll;
  padding: 3rem 0.5rem;
`

const CardImg = styled.img`
  width: 200px;
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 1rem;
`

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  font-size: var(--fontSize-xs);
  overflow-x: clip;
  margin-top: 3rem;
`

const ProductTitle = styled.h3`
  font-size: var(--fontSize-sm);
  font-weight: 700;
`

const ProductDescription = styled.p`
  font-size: var(--fontSize-xs);
  text-transform: lowercase;
  font-weight: 300;
`

const ProductPrice = styled.span`
  font-weight: 500;
  font-size: var(--fontSize-md);
`

export { 
  StyledProducts,
  Card,
  CardImg,
  ProductWrapper,
  ProductTitle,
  ProductDescription,
  ProductPrice
}