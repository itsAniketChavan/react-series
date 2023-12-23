import { useState } from 'react'
import { useEffect } from 'react'

 


function App() {
  
  const [hovered, setHovered] = useState("No")

  const handler = () =>{

    setHovered("YES")
  }

  const handler1 = () =>{
    setHovered("NO")
  }
   

  return (
    <>
       <h2>Task - On hover chages -  </h2>
        
        <h1 onMouseEnter={handler} onMouseLeave={handler1}> Mouse hovering : {hovered}</h1>
    </>
  )
}

export default App
