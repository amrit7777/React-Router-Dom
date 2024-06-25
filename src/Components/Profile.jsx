import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'

function Profile() {
    const auth=useAuth()
    const navigate=useNavigate()

    const handlelogout=()=>{
        auth.logout()
        navigate('/')

    }
  return (
    <div>welcome {auth.user}
    <button onClick={handlelogout}>logout</button>
    </div>
  )
}

export default Profile