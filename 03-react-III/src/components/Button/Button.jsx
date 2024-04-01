import { ButtonStyled } from './styles.js'

export const Button = ({text, type}) => {
  return (
    <ButtonStyled type={type} >{text}</ButtonStyled>
  )
}