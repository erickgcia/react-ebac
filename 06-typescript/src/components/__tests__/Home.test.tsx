import { render, screen } from '@testing-library/react'
import Home from '../../pages/Home'
import { MemoryRouter } from 'react-router-dom'

jest.useFakeTimers()

describe('Home component', () => {
  it('Should animate the text properly', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    jest.advanceTimersByTime(1000)

    const title = screen.getByText('Check out the users page')
    expect(title).toBeInTheDocument()
  })
})
