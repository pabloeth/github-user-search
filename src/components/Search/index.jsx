import { useState } from 'react'
import { searchUser } from '../../services/searchUser'
import search from '../../images/icon-search.svg'
import './Search.css'

export const Search = ({ setData }) => {
  const [error, setError] = useState(false)
  const [form, setForm] = useState('')

  const handleChange = (e) => {
    setForm({
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    findUser()
  }

  const findUser = async () => {
    const response = await searchUser(form.user)
    if (response.error) {
      setError(response.error)
    } else {
      setData(response)
      setError(false)
    }
  }

  return (
    <form className='search' onSubmit={handleSubmit}>
      <img src={search} alt='' className='search__img' />
      <input
        name='user'
        type='text'
        placeholder='GitHub username...'
        className='search__text'
        onChange={handleChange}
        autoComplete='off'
      />
      <p className={error ? 'show-error' : ''}>{error}</p>
      <input type='submit' value='Search' className='search__submit' />
    </form>
  )
}
