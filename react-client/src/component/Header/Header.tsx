import { useState } from 'react'
import './style.css'
import SearchBar from '../SearchBar/SearchBar'
import Button from '../Button/Button'

const Header = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="header">
      <SearchBar />
      <Button />
    </div>
  )
}

export default Header
