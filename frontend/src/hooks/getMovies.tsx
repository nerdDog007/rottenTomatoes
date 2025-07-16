import { useEffect, useState } from 'react';

function useGenreMovies(genre) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/movies?genre=${genre}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return { movies };
}

export default useGenreMovies;