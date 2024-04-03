import '../../../index.css'
import styled from 'styled-components'

const StyledCard = styled.section`
  background-color: var(--white);
  box-sizing: border-box;
  border-radius: 10px;
  color: var(--black);
  width: min(350px, 100%);
  box-shadow: var(--black) 0px 1px 1px 0px;
`
const CardImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`
const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`
const CardStatus = styled.span`
  color: #f00;
  font-weight: 500;
  font-size: 1.05rem;
`
const CardTitle = styled.strong`
  font-weight: 700;
  font-size: 1.2rem;
  flex-shrink: 0;
`
const CardDescription = styled.p`
  line-height: 1.2;
  opacity: 0.75;
  font-weight: 500;
`
const CardColors = styled.p`
  opacity: 0.75;
  font-weight: 500;
`
const CardPrice = styled.strong`
  font-weight: 700;
  font-size: 1.1rem;
`

const CardButton = styled.button`
  background-color: var(--black);
  font-weight: 500;
  color: var(--white);
  width: 100%;
  padding: 0.5rem;
  transition: opacity 300ms ease;

  &:hover {
    opacity: 0.9;
  }
`

export {
  StyledCard,
  CardImg,
  CardInfo,
  CardStatus,
  CardTitle,
  CardDescription,
  CardColors,
  CardPrice,
  CardButton,
}
