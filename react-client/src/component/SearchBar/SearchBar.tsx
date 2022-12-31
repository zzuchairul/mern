import { BiSearch } from 'react-icons/bi'
import { IconContext } from 'react-icons/lib'
import { useEffect, useState } from 'react'
import './style.css'

const SearchBar = ({ getNotes }: {
  getNotes: Function

}) => {
  const [querieTitle, setQuerieTitle] = useState("")

  const getNotesHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuerieTitle(e.target.value)
  }

  useEffect(() => {
    setTimeout(() => {
      getNotes(querieTitle)
    }, 800)
  }, [querieTitle])

  return (
    <div className="SearchBar">
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={querieTitle}
        onChange={getNotesHandler}
      />
      <IconContext.Provider value={{
        color: "rgb(133, 133, 133)",
        size: "20.25px"
      }}>
        <BiSearch />
      </IconContext.Provider>
    </div >
  )
}

export default SearchBar