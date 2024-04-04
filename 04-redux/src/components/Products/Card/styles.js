import '../../../index.css'
import styled, { css } from 'styled-components'

const StyledCard = styled.section`
  background-color: var(--white);
  box-sizing: border-box;
  border-radius: 10px;
  color: var(--black);
  width: min(350px, 100%);
  box-shadow: var(--black) 0px 1px 1px 0px;

  ${(props) =>
    props.display === 'cart' &&
    css`
      display: flex;
      position: relative;
      width: 100%;
      height: 175px;
      font-size: 0.75rem;
      margin-bottom: 1rem;
    `}
`
const CardImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  ${(props) =>
    props.display === 'cart' &&
    css`
      width: 50%;
      height: unset;
    `}
`
const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;

  ${(props) =>
    props.display === 'cart' &&
    css`
      justify-content: center;
      gap: 0.75rem;
    `}
`
const CardStatus = styled.span`
  color: #f00;
  font-weight: 500;
  font-size: 1.05rem;

  ${(props) =>
    props.display === 'cart' &&
    css`
      display: none;
    `}
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

  ${(props) =>
    props.display === 'cart' &&
    css`
      display: none;
    `}
`

const DeleteIcon = styled.i`
  position: absolute;
  top: 10px;
  right: 10px;
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
  DeleteIcon,
}
