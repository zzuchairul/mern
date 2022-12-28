import { IconContext } from 'react-icons/lib'
import './style.css'
import { BsPlusLg } from 'react-icons/bs'

const Button = () => {
  return (
    <button className='Button'>
      <BsPlusLg />
      Add Task
    </button>
  )
}

export default Button