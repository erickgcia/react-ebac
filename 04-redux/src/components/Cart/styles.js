import '../../index.css'
import styled from 'styled-components'

const CartSection = styled.article`
  position: absolute;
  top: 75px;
  right: ${(props) => (props.show ? '0' : '-500px')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  width: 400px;
  padding: 1rem;
  box-sizing: border-box;
  background-color: var(--white);
  border: 2px solid var(--black);
  z-index: 1;
  transition: all 400ms ease-in-out;
`

const CartTitle = styled.h3`
  font-weight: 700;
  font-size: 1.5rem;
  text-align: center;
`

const CartButton = styled.button`
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

const EmptyCart = styled.p`
  font-weight: 700;
  text-align: center;
`

export { CartSection, CartTitle, CartButton, EmptyCart }
