import { render, screen } from '@testing-library/react'
import UserCard, { type UserCardProps } from '../UserCard.tsx'

describe('UserCard component', () => {
  it('Test that user card renders properly', () => {
    render(
      <UserCard
        user={{
          username: '',
          image: '',
          email: '',
          company: { department: '' },
        }}
        getDepartmentClass={() => ''}
      />
    )

    const userCardElement = screen.getByRole('contentinfo')
    expect(userCardElement).toBeInTheDocument()
  })

  it('Test that all the user information is render correctly', () => {
    const mockUser: UserCardProps['user'] = {
      username: 'emilys',
      image: 'https://dummyjson.com/icon/emilys/128',
      email: 'emily.johnson@x.dummyjson.com',
      company: { department: 'Engineering' },
    }

    render(<UserCard user={mockUser} getDepartmentClass={() => ''} />)

    const userImg = screen.getByAltText(`${mockUser.username} image`)
    expect(userImg).toBeInTheDocument()
    expect(userImg).toHaveAttribute('src', mockUser.image)

    const usernameTxt = screen.getByText(mockUser.username)
    expect(usernameTxt).toBeInTheDocument()

    const userDpto = screen.getByText(mockUser.company?.department ?? '')
    expect(userDpto).toBeInTheDocument()

    const userEmail = screen.getByText(mockUser.email)
    expect(userEmail).toBeInTheDocument()
  })

  it('Test that getDepartmentClass function is displayed with the corresponding color', () => {
    const mockUser: UserCardProps['user'] = {
      username: 'emilys',
      image: 'https://dummyjson.com/icon/emilys/128',
      email: 'emily.johnson@x.dummyjson.com',
      company: { department: 'Engineering' },
    }

    const getDepartmentClassMock = jest.fn().mockReturnValue('bg-neutral-400')

    render(
      <UserCard user={mockUser} getDepartmentClass={getDepartmentClassMock} />
    )

    const userCardElement = screen.getByRole('contentinfo')
    expect(userCardElement).toBeInTheDocument()
    expect(getDepartmentClassMock).toHaveBeenCalledWith(
      mockUser.company?.department
    )
  })
})
