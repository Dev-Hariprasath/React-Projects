import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <div className="card">
      <h2>Counter</h2>
        <span>{count}</span><br></br>
        <button id='add' onClick={() => setCount((count) => count + 1)}>Add by 1
        </button>
        <button id='del' onClick={() => setCount((count) => count - 1)}>
          Delete By 1
        </button>
       
      </div>

      
      
    </>
  )
}

export default App
