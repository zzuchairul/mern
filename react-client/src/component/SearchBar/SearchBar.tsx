import { BiSearch } from 'react-icons/bi'
import './style.css'
import { IconContext } from 'react-icons/lib'

const SearchBar = () => {
  return (
    <div className="SearchBar">
      <input type="text" placeholder='Search' />
      <IconContext.Provider value={{
        color: "rgb(133, 133, 133)",
        size: "20.25px"
      }}>
        <BiSearch />
      </IconContext.Provider>
    </div>
  )
}

export default SearchBar