import React from 'react'
import { useAuthStore } from '../../store/authUser.js'

function HomeScreen() {
  const { logout } = useAuthStore()

  return (
    <>
      HomeScreen
      <button onClick={logout}>Logout</button>
    </>
  )
}

export default HomeScreen