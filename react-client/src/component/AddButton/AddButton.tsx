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
    <button className='AddButton' onClick={createNoteHandler}>
      <BsPlusLg />
      Add Task
    </button>
  )
}

export default AddButton