import './style.css'
import { BsPlusLg } from 'react-icons/bs'

const Button = () => {
  const createNoteHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("http://localhost:3333/api/note", {
      method: "POST",
      headers: {
        "Content-Type": "application/json "
      }
    })
  }

  return (
    <form onSubmit={createNoteHandler}>
      <button className='Button' >
        <BsPlusLg />
        Add Task
      </button>
    </form>
  )
}

export default Button