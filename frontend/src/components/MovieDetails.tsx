import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { setMovieDetails } from '../redux/slices/movies'

function MovieDetails() {
    const dispatch = useDispatch()
    const {id} = useParams()

    const {movieDetails,imageUrl} = useSelector(state=>state.movies)
    useEffect(()=>{
        fetch(`http://localhost:5000/api/moviess/${id}`)
        .then(res=>res.json())
        .then(movie=>{
            dispatch(setMovieDetails(movie))
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
  return (
    <div className='w-screen h-[100vh]  flex flex-col justify-center items-center'>
        <div className='w-full h-fit shadow-2xl lg:w-[40vw] md:w-[60vw] flex flex-col items-center'>
            <img src={`${imageUrl}${movieDetails.backdrop_path}`} alt="backdrop" className='w-[100%] h-[50%] object-cover items-start justify-self-start'/>
            <div className='  text-black  bg-white flex flex-col gap-2 p-4'>
                <h1 className='text-3xl font-bold'>{movieDetails.title}</h1>
                <p className='text-[.7rem]'>{movieDetails.overview}</p>
                <p className='text-[.9rem]'>Release Date: {movieDetails.release_date}</p>
                <p className='text-[.9rem]'>Rating: {movieDetails.vote_average}</p>
                <p className='text- [.9rem]'>Genre: {movieDetails.genre}</p>
            </div>
        </div>
    </div>
  )
}

export default MovieDetails