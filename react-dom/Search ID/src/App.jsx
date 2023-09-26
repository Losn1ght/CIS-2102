import { useState } from 'react'
import DisplayStudent from './Components/display'
import './App.css'

function App() {
  const[idInput, setIdInput] = useState('')

  const students = [
    {
      id: 22102538,
      name: 'Jedd',
      age: 20,
      course: 'BS-IT'
    },
    {
      id:13100270,
      name: 'John',
      age: 27,
      course: 'BS-CpE'
    },
    {
      id:12612790,
      name: 'Ean',
      age: 25,
      course: 'BS-ChE'
    },
    {
      id:13502187,
      name: 'Carlo',
      age: 23,
      course: 'BS-CS'
    },
    {
      id:21075329,
      name: 'Josh',
      age: 23,
      course: 'BS-HRM'
    },


  ]

  const filteredStudents = idInput
  ? students.filter(({ id }) => id.toString().includes(idInput))
  : students


  return (
    <>
      <div className="app">
        <h1>Search ID</h1>
        <input 
          type='text'
          onChange={({ target: { value } }) => setIdInput(value)}
          placeholder='Input Student ID'
        />
        <DisplayStudent students={filteredStudents}/>
      </div>
    </>
  )
}

export default App
