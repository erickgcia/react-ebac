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
  DeleteIcon,
} from './styles'

export const Card = ({ addProduct, product, display }) => {
  const handleClick = () => {
    addProduct(product)
  }

  const { id, img, title, itemStatus, description, colors, price } = product

  return (
    <StyledCard key={id} display={display}>
      {display ? (
        <DeleteIcon>
          <i className="fa-solid fa-minus fa-lg"></i>
        </DeleteIcon>
      ) : null}
      <CardImg display={display} src={img} alt={title} />
      <CardInfo display={display}>
        <CardStatus display={display}>{itemStatus}</CardStatus>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardColors>
          {colors <= 1 ? `${colors} Color` : `${colors} Colors`}
        </CardColors>
        <CardPrice>{`$${price}`}</CardPrice>
        <CardButton display={display} onClick={handleClick}>
          Add to Cart
        </CardButton>
      </CardInfo>
    </StyledCard>
  )
}
