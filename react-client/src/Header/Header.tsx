import './style.css'
import SearchBar from '../component/SearchBar/SearchBar'
import Button from '../component/Button/Button'

const Header = () => {
  return (
    <div className="Header">
      <SearchBar />
      <Button />
    </div>
  )
}

export default Header
