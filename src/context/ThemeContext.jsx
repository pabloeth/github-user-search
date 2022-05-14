import { useState, createContext } from 'react'
import sun from '../images/icon-sun.svg'
import moon from '../images/icon-moon.svg'

const darkTheme = {
  text: 'light',
  style: 'dark',
  icon: sun
}

const lightTheme = {
  text: 'dark',
  style: 'light',
  icon: moon
}

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useState(defaultDark ? darkTheme : lightTheme)

  const handleTheme = () => {
    theme.style === 'dark'
      ? setTheme(lightTheme)
      : setTheme(darkTheme)
  }

  const data = { theme, handleTheme }

  return (
    <ThemeContext.Provider value={data}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
