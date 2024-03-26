import { Link } from 'react-router-dom'

export const ProfilesPage = () => {
  const profiles = [
    {
      username: 'jxsmith02',
      name: 'Janeth Smith',
      id: 140001,
    },
    {
      username: 'mdamon00',
      name: 'Matt Damon',
      id: 140002,
    },
    {
      username: 'janecore20',
      name: 'Jane Core',
      id: 140003,
    },
  ]
  return(
    <div>
      <h1>Profiles Page</h1>
      <ul>
      {
        profiles.map(profile => {
          const {username, name, id} = profile
          return (
            <li>
              <Link to={`/profiles/${username}`} key={id}>
                {name}'s Profile
              </Link>
            </li>
          )
        })
      }
      </ul>
    </div>
  )
}