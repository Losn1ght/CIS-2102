import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState("")

  function getData(){
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(response=> response.json())
    .then(json=> {
      console.log(json)
      setTitle(json.message)
    })
  }



  return (
    <>
      <div className="image">
          <img src={title}></img>
      </div>
      <button onClick={getData} >Click Me</button>
    </>
  )
}

export default App