import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)
  const [color,setColor] = useState("rgb(154, 200, 205)")

  return (
    <>
      <div className='w-full h-screen duration-200' 
      style={{backgroundColor: color}}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-2xl'>
                <button onClick={ () => setColor("greenyellow")}
                className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "greenyellow"}}
                >Green</button>
                 <button onClick={ () => setColor("yellow")}
                className='outline-none px-4 py-1 rounded-full text shadow-lg' style={{backgroundColor: "yellow"}}
                >Yellow</button>
                <button onClick={ () => setColor("blue")}
                className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "blue"}}
                >Blue</button>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
