import React from 'react'
import MovieList from '../components/MovieList'
import nowShowing from '../hooks/nowShowing'
import { useSelector } from 'react-redux'

function NowShowing() {
    const m =nowShowing()
  return (
    <> 
         <MovieList movies={m} />
    </>
  )
}

export default NowShowing