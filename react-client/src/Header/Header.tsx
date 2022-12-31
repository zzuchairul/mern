import './style.css'
import SearchBar from '../component/SearchBar/SearchBar'
import AddButton from '../component/AddButton/AddButton'

const Header = ({ getNotes, createNote }: {
  getNotes: Function
  createNote: Function
}) => {
  return (
    <div className="Header">
      <SearchBar
        getNotes={getNotes} />
      <AddButton
        createNote={createNote} />
    </div>
  )
}

export default Header
