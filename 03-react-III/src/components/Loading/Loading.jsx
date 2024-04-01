import { StyledLoading } from "./styles"

export const Loading = ({text}) => {
  return (
    <StyledLoading>
      <h1>Loading {text}...</h1>
    </StyledLoading>
  )
}