import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = () => {
    const [movies, setMovies] = React.useState([]);
    const [movieName, setMovieName] = React.useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        await fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=69848b9d`)
        .then(res => res.json()).then(data => setMovies(data.Search))
        .catch(err => console.log(err))
    }

    

  return (
    
        <div className=' flex h-[100vh] justify-center items-center flex-col bg-gray-200'>
            <form  onSubmit={handleSubmit} className=''>
                <div className=' flex mt-8'>
                    <input type="text" name="search" placeholder='Search for Movie' value={movieName} onChange={e => setMovieName(e.target.value)} className=' p-1 w-[300px] rounded-md outline-none' />
                    <button type="submit" className=' bg-orange-300 ml-5 p-1 rounded-md w-[80px] flex justify-center hover:bg-slate-800 hover:text-white hover:duration-200'>Search</button>
                </div>                
            </form>
            <div className=' flex mt-9 flex-wrap'>
            {
                  movies && movies.map((movie) => (
                        
                        <div className=' flex justify-center' key={movie.imdbID}> 
                            <Link to={`/Movies/${movie.imdbID}`}>
                                <div className=' ml-10 flex flex-col justify-center p-2 rounded-md'>
                                    <img src={movie.Poster} alt='Not Found' className=' w-36 h-44 object-cover' />
                                    <p className=' flex justify-center w-36'> {movie.Title} </p>
                                    <p className=' flex justify-center'> {movie.Year} </p> 
                                </div>
                            </Link>
                        </div>
                        
                    ))
            }
            
            </div>
        </div>
        
    
  )
}

export default MovieList