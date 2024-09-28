import { Outlet } from 'react-router-dom'
import './App.css'
import Navabar from './components/Navabar'

function App() {
 
  return (
    <>
      <Navabar/>
      <Outlet/>
    </>
  )
}

export default App
