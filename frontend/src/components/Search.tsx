import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setSearch } from '../redux/slices/movies'
import { Link } from 'react-router-dom'

function Search() {
  const dispatch = useDispatch()
  const {searchResults,imageUrl} = useSelector(state=>state.movies)
  console.log("tjs")
  return (
    <div className={`absolute ${searchResults.length===0?'hidden':'block'} top-0 z-1000  bg-red-500 text-white w-full h-fit p-4`}>
        <ul className='flex flex-col'>
            {searchResults.map(movie=><SearchListItem movie={movie} key={movie.id} url={imageUrl}/>)}
        </ul>
    </div>
  )
}
function SearchListItem({movie,url}) {
  return (
    <Link to={`/movie/${movie.id}`} className='flex flex-row gap-4 shadow-2xl items-center'>
      <img src={`${url}${movie.backdrop_path}`} alt="backdrop" className='w-[50vw] h-full object-cover'/>
      <div className='flex flex-col gap-4'>
      <p className='text-xl'>{movie.title}</p>
      <p> Rating:{movie.vote_average}</p>
      <p>Release Date:{movie.release_date}</p>
      </div>
    </Link>
  )
}

export default Search