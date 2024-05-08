import { useParams } from 'react-router-dom'

function Users(): JSX.Element {
  const params = useParams<{ userId: string }>()
  return (
    <main>
      <h1>{params.userId} Page</h1>
    </main>
  )
}

export default Users
