import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    let [Counter , setCounter] = useState(15)
  // let Counter = 15;

    const addvalue=()=>{
      if(Counter<20)setCounter(Counter+1)
    }
    const removevalue=()=>{
        if(Counter>0)setCounter(Counter-1)
    }
  return (
    <>
      <h1>Aditya Dhanorkar</h1>
      <h2>Count : {Counter}</h2>

      <button onClick={addvalue}>Add Value {Counter}</button>
      <br/>
      <button onClick={removevalue}>Remove Value{Counter}</button>

      <footer>Footer :{Counter}</footer>
    </>
  )
}

export default App
