import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import UserProfile from '../../pages/UserProfile.tsx'
import { useUsers } from '../../hooks/useUsers.ts'

jest.mock('../../hooks/useUsers.ts')

describe('UserProfile component', () => {
  it('Test that the navigation user profile works', () => {
    const username = 'username123'

    render(
      <MemoryRouter initialEntries={[`/users/${username}`]}>
        <Routes>
          <Route path="/users/:username/" element={<UserProfile />} />
        </Routes>
      </MemoryRouter>
    )

    const renderedTitle = screen.getByText(`${username} Page`)

    expect(renderedTitle).toBeInTheDocument()
  })
})

describe('UserCard in UserProfile component', () => {
  it('should render UserCard for the current user', () => {
    const mockUsers = [
      {
        username: 'username456',
        firstName: 'Random name',
        lastName: 'Random last name',
        university: 'Random university',
        age: 21,
        birthDate: '1999-08-20',
        company: { department: 'Random department' },
      },
      {
        username: 'username123',
        firstName: 'Random name',
        lastName: 'Random last name',
        university: 'Random university',
        age: 25,
        birthDate: '1999-11-20',
        company: { department: 'Random department' },
      },
    ]

    ;(useUsers as jest.Mock).mockReturnValue({ users: mockUsers })

    render(
      <MemoryRouter initialEntries={[`/users/${mockUsers[1].username}`]}>
        <Routes>
          <Route path="/users/:username/" element={<UserProfile />} />
        </Routes>
      </MemoryRouter>
    )

    const userInfo = screen.getByText(
      `${mockUsers[1].firstName} ${mockUsers[1].lastName}`
    )
    expect(userInfo).toBeInTheDocument()
  })
})
