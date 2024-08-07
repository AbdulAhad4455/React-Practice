import React, { useContext, useState } from 'react'
import UserContext from '../UserContext'


const Login = () => {
    const[username,setUsername]=useState()
    const[password,setPassword]=useState()
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
      setUser({username,password})
    }
  return (
    <>
    <h2>Login</h2>
    <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='userName'/>
    <br/>
    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'/>
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login
