import { useState } from "react"

function App() {
  let [counter,setCounter] =  useState(2)
  

  const addValue = () =>{
    setCounter(counter => counter +1)
    setCounter(counter => counter +1)
    setCounter(counter => counter +1)
    setCounter(counter => counter +1)
    setCounter(counter => counter +1)
    console.log(`added ${counter}`)
    
  }
  const rem = () =>{
    if(counter > 0){
      setCounter(counter-1)
      console.log(` remed ${counter}`)
    }
    
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
