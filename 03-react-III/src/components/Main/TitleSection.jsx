import { Button } from '../Button/Button.jsx'
import { ButtonWrapper } from '../Button/styles.js'
import { MainSubtitle, MainTitle, StyledMain } from './styles.js'

export const TitleSection = ({title, subtitle}) => {
  return (
    <StyledMain>
      <MainTitle>Lorem ipsum dolor <span>{title}</span> sit</MainTitle>
      <MainSubtitle>{subtitle}</MainSubtitle>
      <ButtonWrapper>
        <Button text='Get Started' />
        <Button text='Talk to Sales' type='secondary' />
      </ButtonWrapper>
    </StyledMain>
  )
}