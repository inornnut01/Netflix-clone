import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function SignUpPage() {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSignUp = (e) => {
    e.preventDefault()
    console.log(email, username, password)
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
          <h1 className='text-center text-white text-2xl font-bold mb-4'>Sign Up</h1>

          <form className='space-y-4' onSubmit={handleSignUp}>
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
              <label htmlFor='username' className='text-sm text-gray-300 font-medium block'>
                Username
              </label>
              <input 
              className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring'
              placeholder='Enter your username'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type='submit' className='w-full bg-red-600 text-white py-2 px-4 font-semibold rounded-md hover:bg-red-700 transition-colors'>
              Sign Up
            </button>

            <div className='text-center text-sm text-gray-400'>
              Already have an account? <Link to='/login' className='text-red-500 hover:underline'>Login</Link>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage