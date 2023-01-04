import React from 'react'
import {useSelector} from 'react-redux'
function Home() {
    const username = useSelector(state=>state.user.value.username)
  return (
    <div>
      <h1>Home page</h1>
      <h2>welcome {username}</h2>
    </div>
  )
}

export default Home
