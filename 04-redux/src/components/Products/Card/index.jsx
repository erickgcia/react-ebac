export const Card = ({
  img,
  itemStatus,
  title,
  description,
  colors,
  price,
}) => {
  return (
    <section>
      <img src={img} alt={title} />
      <div>
        <span>{itemStatus}</span>
        <strong>{title}</strong>
        <p>{description}</p>
        <p>{colors}</p>
        <strong>{price}</strong>
      </div>
    </section>
  )
}
