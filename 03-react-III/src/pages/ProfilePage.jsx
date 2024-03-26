import { useParams } from "react-router-dom"

export const ProfilePage = () => {
  const params = useParams()
  return (
    <h1>{params.profileUsername} Page</h1>
  )
}