import { IconContext } from 'react-icons';
import { RxCross2 } from 'react-icons/rx'
import './style.css'

const DeleteButton = ({ _id, deleteNote }: {
  _id: String
  deleteNote: Function
}) => {

  const deleteNoteHandler = (e: React.FormEvent) => {
    e.preventDefault()
    deleteNote(_id)
  }

  return (
    <div onClick={deleteNoteHandler} className='DeleteButton'>
      <IconContext.Provider value={{
        color: "black",
        size: "16px"
      }}>
        <RxCross2 />
      </IconContext.Provider>
    </div>
  );
};

export default DeleteButton;
