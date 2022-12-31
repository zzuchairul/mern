import { BiSearch } from 'react-icons/bi'
import './style.css'
import { IconContext } from 'react-icons/lib'
import { useState } from 'react'

const SearchBar = () => {
  const [q, setQ] = useState("")

  return (
    <div className="SearchBar">
      <input
        type="text"
        name="search-form"
        id="search-form"
        className="search-input"
        placeholder="Search for..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
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