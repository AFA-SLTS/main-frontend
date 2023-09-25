import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'

function App() {
  const [isValidated, setCount] = useState(false)

  return (
    <>
      <Login></Login>
    </>
  )
}

export default App
