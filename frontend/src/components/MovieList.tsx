import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { CiStar } from "react-icons/ci";

function MovieList({movies,title}) {
    if (!movies || movies.length === 0) return <div>Loading...</div>;
    const imageUrl = useSelector(state => state.movies.imageUrl);
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === movies.length - 3 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [movies.length]);

    if (!movies || movies.length === 0) return <div>Loading...</div>;

  return (
    <div className='w-full h-[45vh] mt-4 flex gap-4 px-2 flex-col'>
        <h1 className='text-center text-[1.5rem] font-bold'>{title} movies</h1>
        <ul className='flex w-full gap-2 overflow-x-scroll'
        >
            {
                movies.map(movie=>{
                    return <MovieListItem movie={movie} currentIndex={currentIndex} imageUrl={imageUrl}/>
                })
            }
        </ul>
    </div>
  )
}
function MovieListItem({movie,imageUrl,currentIndex}) {
  return (
    <li className=' min-w-[40vw] lg:min-w-[10vw] relative transition-transform duration-500 ease-in-out'
    style={{transform: `translateX(-${currentIndex * 100}%)`}}

    >
        <img src={`${imageUrl}${movie.poster_path}`} alt={movie.title} className='w-[100%]  h-[70%] object-center'/>
        <p className='text-[.7rem] text-black'>{movie.release_date}
        </p>
        <div className='flex items-center gap-2'>
        <p className='text-[.7rem] text-black'>{movie.vote_average}</p>
        <CiStar className='text-black text-[1.5rem]'/>
        </div>
        <p className='text-[1rem]  text-black'>{movie.title}</p>
    </li>
  )
}
export default MovieList