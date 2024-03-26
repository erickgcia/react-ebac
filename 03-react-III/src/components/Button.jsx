export const Button = ({text, modifier}) => {
  return (
    <button className={`btn ${modifier}`}>{text}</button>
  )
}