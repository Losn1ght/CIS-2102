import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import FirstActivity from './pages/FirstActivity'
import SecondActivity from './pages/SecondActivity'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/first' element={<FirstActivity />}/>
          <Route path='/second' element={<SecondActivity />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
