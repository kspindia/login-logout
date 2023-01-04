import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from './store'

export default function Login() {
const [newUsername, setNewUsername] = useState('')
  const username = useSelector((state) => state.user.value.username)
  const dispatch = useDispatch()

  return (
    <div className='login-box'>
      <div>
        <input type='text' onChange={(e)=>setNewUsername(e.target.value)}/>
        <button
          
          onClick={() => dispatch(login({username:newUsername}))}
        >
          login
        </button>
        
        <button
          
          onClick={() => dispatch(logout())}
        >
          logout
        </button>
      </div>
      <br/>
      <div>
        {username ?  ( <h1>logged in user is : {username}</h1>) : <h1>please login now</h1>}
       </div>
    </div>
  )
}