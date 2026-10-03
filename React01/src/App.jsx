
import './App.css'
import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(14)

  const AddValue = ()  => {
    console.log("Clicked!", Math.random)
    setCounter(counter + 1)
  }
  return(
    <>
    <h1>
      Hello New Project
    </h1>
    <h2>Counter Value = {counter}</h2>
   < button onClick={AddValue}> Add the value</button>

    <br />
    <button onClick={() => setCounter(counter - 1)}> Remove the value</button>
    </>
  )};
  export default App