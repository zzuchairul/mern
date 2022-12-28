import './style.css'
import Card from '../component/Card/Card'
import { useEffect, useState } from 'react'

const Body = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const getNotes = async () => {
      const res = await fetch("http://localhost:3333/api/note")
      const newNotes = await res.json()
      setNotes(newNotes)
    }
    getNotes()
  }, [])


  return (
    <div className="Body">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Body