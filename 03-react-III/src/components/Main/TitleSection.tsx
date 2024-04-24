import { Button } from '../Button/Button.ts'
import { ButtonWrapper } from '../Button/styles.ts'
import { MainSubtitle, MainTitle, StyledMain } from './styles.ts'

export const TitleSection = ({ title, subtitle }) => {
  return (
    <StyledMain>
      <MainTitle>
        Lorem ipsum dolor <span>{title}</span> sit
      </MainTitle>
      <MainSubtitle>{subtitle}</MainSubtitle>
      <ButtonWrapper>
        <Button text="Get Started" />
        <Button text="Talk to Sales" type="secondary" />
      </ButtonWrapper>
    </StyledMain>
  )
}
