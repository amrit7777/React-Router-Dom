import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate=useNavigate()
  return (
    <>
    <div>Home page</div>
    <button onClick={()=>navigate('order-summary')}>Place order</button>
    </>
  )
}

export default Home