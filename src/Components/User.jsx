import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

function User() {
    const [searchparams,setSearchParaams] =useSearchParams()
    const showActiveUsers=searchparams.get('filter')==='active'
  return (
    <div>
        <h2>User 1</h2>
        <h2>User 2</h2>
        <h2>User 3</h2>
        <Outlet/>
        <div>
            <button onClick={()=>setSearchParaams({filter:'active'})}>Active Users</button>
            <button onClick={()=>setSearchParaams({filter:'reset'})}>Reset Filter</button>
        </div>
        {
            showActiveUsers?<h2>Showing active users</h2>:<h2>Showing all users</h2>
        }
    </div>
  )
}

export default User