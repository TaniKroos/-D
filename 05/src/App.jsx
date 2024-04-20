import { useState , useCallback } from 'react'

import './App.css'

function App() {
  const [len, setLen] = useState(8) 
  const [num, setNum] = useState(false)
  const [ch, setCh] = useState(false)
  const [pass, setPass] = useState("")
  const psgen = useCallback(() =>{
      let pass =""
      let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if(num) str+="0123456789"
      if(ch) str+="!@#$%^&*()[]{}~`"
      for (let i = 0; i < array.length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass = str.charAt(char)
        
      }
      setPass(pass)

  },[len, num, ch, setPass])

  

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg
      px-4 my-8 text-orange-500 bg-gray-700'>
        Test

      </div>
    </>
  )
}

export default App
