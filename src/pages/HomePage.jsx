import { useContext, useState } from 'react'
import { Header } from '../components/Header'
import { Search } from '../components/Search'
import { UserInfo } from '../components/UserInfo'
import ThemeContext from '../context/ThemeContext'

export const HomePage = () => {
  const { theme } = useContext(ThemeContext)
  const [data, setData] = useState('octocat')

  return (
    <main className={theme.style}>
      <div className='content'>
        <Header />
        <Search setData={setData} />
        <UserInfo data={data} setData={setData} />
      </div>
    </main>
  )
}
