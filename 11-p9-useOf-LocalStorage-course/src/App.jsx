import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1>Project - Use of local storage to store profile details entered.</h1>
       <Profile/>
    </>
  )
}

export default App
