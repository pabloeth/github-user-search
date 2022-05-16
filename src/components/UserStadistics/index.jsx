import './UserStadistics.css'

export const UserStadistics = ({ publicRepos, followers, following }) => {
  const data = [
    {
      id: 1,
      title: 'Repos',
      number: publicRepos
    },
    {
      id: 2,
      title: 'Followers',
      number: followers
    },
    {
      id: 3,
      title: 'Following',
      number: following
    }
  ]

  return (
    <div className='stadistics'>
      {
        data.map(item => {
          return (
            <div key={item.id} className='stadistics__item'>
              <p>{item.title}</p>
              <p>{item.number}</p>
            </div>
          )
        })
      }
    </div>
  )
}
