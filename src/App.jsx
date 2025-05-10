import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <h1
        className='text-white text-3xl pb-4'
        >Find Your Favorite Movies Instantly</h1>
        <h3
        className='text-white text-xl pb-4'
        >Type a title below and explore details, ratings, and posters.</h3>
        <div>
          <input 
          type="text" 
          placeholder='Search your movies'
          className='w-full p-2 text-base rounded mb-4 outline-none border border-red-700 transition-all'
          />
          <button
          className=' bg-red-800 text-white px-4 py-2 rounded text-base cursor-pointer transition-all hover:bg-red-700'
          >Search</button>
        </div>
      </div>
    </>
  )
}

export default App
