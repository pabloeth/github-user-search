import locationIcon from '../../images/icon-location.svg'
import websiteIcon from '../../images/icon-website.svg'
import twitterIcon from '../../images/icon-twitter.svg'
import companyIcon from '../../images/icon-company.svg'
import './UserContact.css'

export const UserContact = ({ location, blog, twitterUsername, company }) => {
  const data = [
    {
      id: 1,
      icon: locationIcon,
      text: location,
      link: false
    },
    {
      id: 2,
      icon: websiteIcon,
      text: blog,
      link: blog
    },
    {
      id: 3,
      icon: twitterIcon,
      text: twitterUsername,
      link: `https://twitter.com/${twitterUsername}`
    },
    {
      id: 4,
      icon: companyIcon,
      text: company,
      link: false
    }
  ]

  return (
    <div className='contact'>
      {
        data.map(item => {
          return (
            <div key={item.id} className={item.text ? 'contact__item' : 'contact__item disable'}>
              <img src={item.icon} alt='' />
              {
                item.link && item.text != null
                  ? <a href={item.link} target='_blank' rel='noopener noreferrer'>{item.text}</a>
                  : <p>{item.text || 'Not Available'}</p>
              }
            </div>
          )
        })
      }
    </div>
  )
}
