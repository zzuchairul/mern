import DeleteButton from '../DeleteButton/DeleteButton';
import './style.css';

const Card = ({ title, desc, _id, deleteNote }: {
  title: String,
  desc: String,
  _id: String
  deleteNote: Function
}) => {
  return (
    <div className="Card Card__purple" >
      <div className="Card__wrapper">
        <div className="Card__header">
          <h3>{title}</h3>
          <DeleteButton
            _id={_id}
            deleteNote={deleteNote} />
        </div>
        <hr />
        <div className="Card__body">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Card 