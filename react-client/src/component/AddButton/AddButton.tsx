import './style.css'
import { BsPlusLg } from 'react-icons/bs'

const AddButton = ({ createNote }: {
  createNote: Function
}) => {
  const createNoteHandler = (e: React.FormEvent) => {
    e.preventDefault()
    createNote();
  }

  return (
    <form onSubmit={createNoteHandler}>
      <button className='AddButton' >
        <BsPlusLg />
        Add Task
      </button>
    </form>
  )
}

export default AddButton