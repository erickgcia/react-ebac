import { renderHook, act } from '@testing-library/react-hooks'
import { useUsers } from '../../hooks/useUsers'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('useUsers hook', () => {
  it('Should fetch and set the users', async () => {
    const mockUsers = [
      {
        id: '1',
        username: 'username123',
        email: 'username123@random.com',
        image: 'https://randompage123.com/image1.jpg',
        company: { department: 'Engineering' },
      },
      {
        id: '2',
        username: 'username456',
        email: 'username456@random.com',
        image: 'https://randompage123.com/image2.jpg',
        company: { department: 'Support' },
      },
    ]

    mockedAxios.get.mockResolvedValueOnce({
      data: {
        users: mockUsers,
      },
    })

    const { result, waitForNextUpdate } = renderHook(() => useUsers())

    await act(async () => await waitForNextUpdate())

    expect(result.current.users).toEqual(mockUsers)
    expect(mockedAxios.get).toHaveBeenCalledTimes(1)
    expect(mockedAxios.get).toHaveBeenCalledWith(
      'https://dummyjson.com/users?limit=20'
    )
  })

  it('Should catch error if hook fails', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Something went wrong.'))

    const { result, waitForNextUpdate } = renderHook(() => useUsers())

    await act(async () => {
      await waitForNextUpdate()
    })

    expect(result.current.users).toEqual([])
  })
})
