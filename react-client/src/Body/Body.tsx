import './style.css'
import Card from '../component/Card/Card'

type TNote = {
  title: String,
  desc: String,
  _id: String
}
const Body = ({ notes, deleteNote }: {
  notes: TNote[]
  deleteNote: Function
}) => {
  return (
    <div className="Body">
      {
        notes.map((note) => {
          return (
            <Card
              _id={note._id}
              title={note.title}
              desc={note.desc}
              deleteNote={deleteNote}
            />
          )
        })
      }
    </div>
  )
}

export default Body