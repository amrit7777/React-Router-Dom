import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'

function Login() {
    const [user,setUser]=useState('')
    const auth=useAuth()
    const navigate=useNavigate()
    const location =useLocation()
    const redirectPath=location.state?.path || '/'
    console.log(redirectPath)
    const handlelogin=()=>{
        auth.login(user)
        navigate(redirectPath,{replace:true})
    }
  return (
    <div>
        <label>
            Username:<input type='text' onChange={(e)=>setUser(e.target.value)}/>
        </label>
        <button onClick={handlelogin}>login</button>
    </div>
  )
}

export default Login