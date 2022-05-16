import { useEffect } from 'react'
import { searchUser } from '../../services/searchUser'
import { UserContact } from '../UserContact'
import { UserDescription } from '../UserDescription'
import { UserStadistics } from '../UserStadistics'
import './UserInfo.css'

export const UserInfo = ({ data, setData }) => {
  useEffect(function () {
    searchUser(data).then(user => setData(user))
  }, [])

  const {
    avatar_url, name, login, created_at, bio,
    public_repos, followers, following,
    location, blog, twitter_username, company
  } = data

  return (
    <section className='section'>
      <UserDescription
        avatarUrl={avatar_url}
        name={name}
        login={login}
        createdAt={created_at}
        bio={bio}
      />
      <UserStadistics
        publicRepos={public_repos}
        followers={followers}
        following={following}
      />
      <UserContact
        location={location}
        blog={blog}
        twitterUsername={twitter_username}
        company={company}
      />
    </section>
  )
}
