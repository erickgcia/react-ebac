import { Label, StyledInput } from './styles'

export const SearchForm = () => {
  return (
    <form>
      <Label htmlFor="search">
        <i
          style={{
            position: 'absolute',
            top: '10px',
            left: '15px',
          }}
          className="fa-solid fa-magnifying-glass fa-lg"
        ></i>
        <StyledInput
          id="search"
          name="search"
          type="search"
          placeholder="Search"
        />
      </Label>
    </form>
  )
}
