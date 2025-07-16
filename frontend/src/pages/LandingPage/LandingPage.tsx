import React, { useEffect, useState } from 'react'
import NavBar from '../../layouts/NavBar'
import Header from '../../components/Header.tsx'
import { useDispatch,useSelector } from 'react-redux'
import { setMovies,setIsLoading } from '../../redux/Movies/movies'
import HighLight from '../../components/HighLight.tsx'

function LandingPage() {
  const dispatch = useDispatch()
  useEffect(()=>{
    fetch('http://localhost:5000/api/movies?genre=Action')
  .then(res => res.json())
  .then(data => {
    dispatch(setMovies(data))
    dispatch(setIsLoading(false))
  })
  .catch(err => console.error(err));
  },[])
  return (
    <div className='lg:w-[80vw] overflow-x-hidden lg:h-[70vh] mx-auto'>
        <Header />
        <NavBar />
        <HighLight/>

    </div>
  )
}

export default LandingPage