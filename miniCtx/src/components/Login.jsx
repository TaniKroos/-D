import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'
function Login() {
    const [name,setName] = useState('')
    const [password , setPassword] = useState ('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({name, password})
    }
 


    return (
        <div>
            <h2>Login</h2>
            <input 
            value={name}
            onChange={(e) => setName(e.target.value)}
           
            type="text" placeholder='name'/>
            {' '}
            <input
             value={password}
             onChange={(e) => setPassword(e.target.value)}
            type="password" placeholder='password'/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
