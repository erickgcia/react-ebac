import { useDispatch } from 'react-redux'
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
import { addProducts, removeProducts } from '../../../actions'

export const Card = ({ product, display }) => {
  const { id, img, title, itemStatus, description, colors, price } = product
  const dispatch = useDispatch()

  const handleAddProduct = () => {
    dispatch(addProducts(product))
  }

  const handleOnRemove = () => {
    dispatch(removeProducts(id))
  }

  return (
    <StyledCard key={id} display={display}>
      {display ? (
        <DeleteIcon onClick={handleOnRemove}>
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
        <CardButton display={display} onClick={handleAddProduct}>
          Add to Cart
        </CardButton>
      </CardInfo>
    </StyledCard>
  )
}
