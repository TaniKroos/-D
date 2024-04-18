import { useState } from "react"

function App() {
  let [counter,setCounter] =  useState(15)
  

  const addValue = () =>{
    setCounter(counter++)
  }
  const rem = () =>{
    setCounter(counter--)
  }

  return (
    <>
    <h1>Rodygooooo</h1>
    <h2>Counter Value: {counter}</h2>
    <button
    onClick={addValue}
    >Add</button>
    <br />
    <button
    onClick={rem}
    >Decrease</button>
    <footer>{counter}</footer>
    </>
  )
}

export default App
