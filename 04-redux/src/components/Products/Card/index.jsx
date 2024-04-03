import {
  CardColors,
  CardDescription,
  CardImg,
  CardInfo,
  CardPrice,
  CardStatus,
  CardTitle,
  StyledCard,
  CardButton,
} from './styles'

export const Card = ({
  img,
  itemStatus,
  title,
  description,
  colors,
  price,
  addCartProduct,
}) => {
  return (
    <StyledCard>
      <CardImg src={img} alt={title} />
      <CardInfo>
        <CardStatus>{itemStatus}</CardStatus>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardColors>{colors}</CardColors>
        <CardPrice>{price}</CardPrice>
        <CardButton onClick={addCartProduct}>Add to Cart</CardButton>
      </CardInfo>
    </StyledCard>
  )
}
