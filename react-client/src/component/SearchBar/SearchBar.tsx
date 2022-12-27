import { BiSearch } from 'react-icons/bi'
import './style.css'

const SearchBar = () => {
  return (
    <div className="SearchBar">
      <input type="text" placeholder='Search here' />
      <span><BiSearch /></span>
    </div>
  )
}

export default SearchBar