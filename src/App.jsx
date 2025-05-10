import { useState} from 'react'
import './App.css'


function App() {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState("")

  const searchmovies = async (e) => {
    if(query === "") return

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${query}`)

    const data = await res.json()

    setMovies(data.results || [])


  }

  return (
    <>
      <button
      className='absolute top-4 left-4 bg-red-800 text-white px-4 py-2 rounded text-base cursor-pointer transition-all hover:bg-red-700'
      onClick={(e) => 
        setMovies([]) & setQuery("")
      }>Back</button>
      <div className='pt-20 px-4 '>
        <h1
        className='text-white text-3xl pb-4'
        >Find Your Favorite Movies Instantly</h1>
        <h3
        className='text-white text-xl pb-4'
        >Type a title below and explore details, ratings, and posters.</h3>
        <div>
          <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search your movies'
          className='w-full p-2 text-base rounded mb-4 outline-none border border-red-700 transition-all text-black'

          />
          <button
          onClick={searchmovies}
          className=' bg-red-800 text-white px-4 py-2 rounded text-base cursor-pointer transition-all hover:bg-red-700'
          >Search</button>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6'>
        {movies.map((movie) => (
          <div key={movie.id} className='bg-gray-800 p-4 rounded'>
            <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            className='w-full h-64 object-cover rounded mb-4'
            />
            <h2 className='text-white text-xl mb-2'>{movie.title}</h2>
            <p className='text-white'>{movie.overview}</p>
            <p className='text-white mt-2'>Rating: {movie.vote_average}</p>
            <p className='text-whit'>Release Date: {movie.release_date}</p>
            </div>
        ))}
      </div>
    </>
  )
}

export default App
