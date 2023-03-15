import React from 'react';
import {useParams } from 'react-router-dom';

const MovieDetails = () => {
  const {imdbID} = useParams();
  const [movie, setMovie] = React.useState(null);

  React.useEffect(() => {
    const fetchMovie = async()=>{
      await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=69848b9d`,{
      })
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch((err) => console.log(err))
    }
    if (imdbID) {
      fetchMovie();
      console.log('ID found');
    }else{
      console.log('Id not found')
    }
  }, [imdbID])

  return (
    <div className=''>
     {
      movie && (
        <div className=' flex h-[100vh] justify-center items-center'>
          <div className=' flex flex-col justify-center'>
            <h2 className=' text-4xl font-bold mb-3 flex justify-center'>{movie.Title}</h2>
            <img src={movie.Poster} className=' w-[250px] h-auto' alt="poster" />
          </div>
          <div className=' flex flex-col ml-5'>
            <p><span className=' font-bold'>Released :</span> {movie.Released}</p>
            <p><span className=' font-bold mt-3'>Genre :</span> {movie.Genre}</p>
            <p><span className=' font-bold mt-3'>Director :</span> {movie.Director}</p>
            <p className=' w-[430px] mt-3'><span className=' font-bold'>Plot :</span> {movie.Plot}</p>
            <p className=' mt-3'><span className=' font-bold'>Rating :</span> {movie.imdbRating}</p>

          </div>
        </div>
      )
     }
    </div>
  )
}

export default MovieDetails