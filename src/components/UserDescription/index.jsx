import './UserDescription.css'

export const UserDescription = ({ avatarUrl, name, login, createdAt, bio }) => {
  const joinedAt = () => {
    const dateFormatter = new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium' })
    if (createdAt) {
      const date = new Date(createdAt)
      const createAt = dateFormatter.format(date)
      return createAt
    }
  }

  return (
    <div className='description'>
      <div className='description__container'>
        <div className='description__img'>
          <img src={avatarUrl} alt='' />
        </div>
        <div className='description__info'>
          <h2>{name}</h2>
          <a href={`https://github.com/${login}`} target='_blank' rel='noopener noreferrer'>{`@${login}`}</a>
          <p>{`Joined ${joinedAt()}`}</p>
        </div>
      </div>
      <div className={bio ? 'description__paragraph' : 'description__paragraph no-bio'}>
        <p>{bio || 'This profile has no bio.'}</p>
      </div>
    </div>
  )
}
