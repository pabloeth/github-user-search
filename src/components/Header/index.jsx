import { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'
import './Header.css'

export const Header = () => {
  const { theme, handleTheme } = useContext(ThemeContext)

  return (
    <header className='header'>
      <h1>devfinder</h1>
      <button onClick={handleTheme} className='header__button'>
        <p>{theme.text.toUpperCase()}</p>
        <img src={theme.icon} alt='Theme icon' />
      </button>
    </header>
  )
}
