import { useEffect, useState } from 'react';
import Body from './Body/Body';
import Header from './Header/Header';
import './style.css';

type TNote = {
  title: String,
  desc: String,
  _id: String
}

const App = () => {
  const [notes, setNotes] = useState<TNote[]>([])

  const createNote = async () => {
    const newNote = await fetch("http://localhost:3333/api/note", {
      method: "POST"
    })
      .then(data => data.json())
    setNotes([...notes, newNote])
  }

  const deleteNote = async (_id: String) => {
    await fetch(`http://localhost:3333/api/note/${_id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
    setNotes((notes) => notes.filter(note => note._id !== _id))
  }

  useEffect(() => {
    const getNotes = async () => {
      await fetch("http://localhost:3333/api/note")
        .then(res => res.json())
        .then(data => setNotes(data))
    }
    getNotes()
  }, [])

  return (
    <div className='App'>
      <Header
        createNote={createNote} />
      <Body
        notes={notes}
        deleteNote={deleteNote} />
    </div>
  );
};

export default App;