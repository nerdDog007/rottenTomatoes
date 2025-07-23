import React from 'react'

async function getMovies(movie) {
  try {
    const res = await fetch(`http://localhost:5000/api/movie?movieName=${movie}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default getMovies;