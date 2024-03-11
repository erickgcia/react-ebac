import { useState } from "react"

export const Button = ({initialIsClicked}) => {
  const [isClicked, setIsClicked] = useState(initialIsClicked)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }
  
  const text = isClicked ? 'Click Me Again' : 'Click Me'
  const btnClassType = isClicked ? 'secondary' : 'primary'

  return(
    <button className={`btn btn--${btnClassType}`} onClick={handleClick}>
      {text}
    </button>
  )
}