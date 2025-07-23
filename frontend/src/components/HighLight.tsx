import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Search from './Search';

function HighLight() {
  const movies = useSelector((state) => state.movies.movies);
  const imageUrl = useSelector((state) => state.movies.imageUrl);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === movies.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval); 
  }, [movies.length]); 

  if (!movies || movies.length === 0) return <div>Loading...</div>;

  return (
    <section className="relative w-full overflow-hidden h-[40vh]">
      <ul
        className="flex  transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {movies.map((movie, index) => (
          <li
            key={index}
            className="w-full bg-red-400 h-[40vh] shrink-0 flex items-center justify-center relative"
          >
            <img
              src={`${imageUrl}${movie.poster_path}`}
              alt={movie.title}
              className="w-screen h-full object-contain absolute top-0 left-0 z-0"
            />
              <div className="absolute w-[100vw] shadow-2xl sm:w-[30vw] bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-l-4 p-4 flex flex-col items-center justify-center border-red-400 bg-black bg-opacity-50 text-white z-10"> 
             <h1 className="text-3xl font-bold">{movie.title}</h1>
              <p className="text-sm">{movie.overview.slice(0, 200)}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
        {movies.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer text-4xl ${
              index === currentIndex ? 'text-green-500' : 'text-red-300'
            }`}
          >
            •
          </span>
        ))}
      </div>
      <Search/>
    </section>
  );
}

export default HighLight;
