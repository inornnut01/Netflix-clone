import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/authUser'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, isLoggingIn } = useAuthStore()

  const handleLogin = (e) => {
    e.preventDefault()
    login({email, password})
  }

  return (
    <div className='h-screen w-full hero-bg'>
      <header className='max-w-6xl mx-auto flex items-center justify-between p-4'>
        <Link to="/">
          <img src="/netflix-logo.png" alt="logo" className='w-52' />
        </Link>
      </header>

      <div className='flex justify-center items-center mt-20 mx-3'>
        <div className='w-full max-w-md p-8 sapce-y-6 bg-black/60 rounded-lg shadow-md'>
          <h1 className='text-center text-white text-2xl font-bold mb-4'>Login</h1>

          <form className='space-y-4' onSubmit={handleLogin}>
            <div>
              <label htmlFor='email' className='text-sm text-gray-300 font-medium block'>
                Email
              </label>
              <input 
              className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring'
              placeholder='Enter your email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            </div>
        

            <div>
              <label htmlFor='password' className='text-sm text-gray-300 font-medium block'>
                Password
              </label>
              <input 
              className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring'
              placeholder='Enter your password'
              id='password'
              value={password}
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type='submit' className='w-full bg-red-600 text-white py-2 px-4 font-semibold rounded-md hover:bg-red-700 transition-colors'
              disabled={isLoggingIn}
            >

              {isLoggingIn ? "Loading..." : "Login"}
            </button>

            <div className='text-center text-sm text-gray-400'>
              Don't have an account? <Link to='/signup' className='text-red-500 hover:underline'>Sign Up</Link>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage