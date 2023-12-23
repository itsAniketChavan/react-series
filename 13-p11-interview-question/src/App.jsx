import { useState } from 'react'
import './App.css'

function App() {
  const [mainV, setMainV] = useState(1)
  // const [multipliedV, setmultipliedV] = useState(1)
  
  let multipliedV = mainV*10

  const multiplier = () =>{

    // setmultipliedV(mainV*10)
    setMainV(mainV+1)
  }

  return (
    <>
     <h1>Main Value : {mainV}</h1>
     <button onClick={multiplier}>Multiply by 10</button>
     <h1>Multiplied value :{multipliedV}</h1>
    </>
  )
}

export default App
