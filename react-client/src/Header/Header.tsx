import './style.css'
import SearchBar from '../component/SearchBar/SearchBar'
import AddButton from '../component/AddButton/AddButton'

const Header = ({ createNote }: {
  createNote: Function
}) => {
  return (
    <div className="Header">
      <SearchBar />
      <AddButton
        createNote={createNote} />
    </div>
  )
}

export default Header
