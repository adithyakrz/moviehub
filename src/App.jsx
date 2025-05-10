import { useState } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const searchmovies = async (e) => {
    if (query === "") return;

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${query}`);
    const data = await res.json();

    console.log(data);
    setMovies(data.results || []);
  }

  return (
    <>
      <button
        className='absolute top-4 left-4 bg-red-800 text-white px-4 py-2 rounded text-base cursor-pointer transition-all hover:bg-red-700'
        onClick={(e) => setMovies([]) & setQuery("")}
      >Back</button>

      <div className='pt-20 px-4 '>
        <h1 className='text-white text-3xl pb-4'>Find Your Favorite Movies Instantly</h1>
        <h3 className='text-white text-xl pb-4'>Type a title below and explore details, ratings, and posters.</h3>
        <div className="search-bar-container">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search your movies'
            className='search-input'
          />
          <button
            onClick={searchmovies}
            className='search-button'
          >Search</button>
        </div>
      </div>

      <div className='grid'>
        {movies.map((movie) => (
          <div key={movie.id} className='movie-card'>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className='movie-image'
            />
            <h2 className='text-white text-xl mb-2'>{movie.title}</h2>
            <p className='text-white'>{movie.overview}</p>
            <p className='text-white mt-2'>Rating: {movie.vote_average}</p>
            <p className='text-white'>Release Date: {movie.release_date}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App;

