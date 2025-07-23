import logo from '../assets/logo.png'
import Input from './Input'
import { useSelector,useDispatch } from 'react-redux'
import { setSearch ,setSearchResults} from '../redux/slices/movies'
import { setModal } from '../redux/slices/auth'
import { useEffect } from 'react'

import useGenreMovies from '../hooks/getMoviesByGenre'
import getMovies from '../hooks/getMovies'
import Search from './Search'

function Header() {
  const dispatch = useDispatch()
  const search = useSelector(state=>state.movies.search)
  const {logged} = useSelector(state=>state.auth)
  const {searchResults} = useSelector(state=>state.movies)
  useEffect(() => {
    const fetchMovies = async () => {
      const m = await getMovies(search);
      console.log("Search:", search);
      dispatch(setSearchResults(m));
      console.log("Movies:", m);
    };
    if (search) fetchMovies(); // only fetch if search has value
  }, [search]);
  return (
    <header className='bg-red-500  h-[10vh] md:h-[10vh] p-4  flex items-center justify-between'>
        <img src={logo} alt="logo" className='w-[25%] lg:w-[15%] h-auto pl-4'/>
        <Input onChange={(e)=>dispatch(setSearch(e.target.value))} value={search} type='search' className='w-[60%]  mr-4 md:w-[50%] lg:w-[40%] bg-gray-900 outline-0 border-2 px-2 py-1 text-white rounded-4xl' placeholder='Search'/>
        <div className='hidden lg:block' onClick={()=>dispatch(setModal(true))}>
         {logged===false && <div className='flex mb-4 font-bold text-white gap-4 items-center'>
          <p>Log In</p>
          <p>Sign Up</p>
          </div>}
        <ul className='flex flex-row gap-4 text-white font-bold'>
            <NavBarItem text='Discover'/>
            <NavBarItem text='Movies'/>
            <NavBarItem text='TV'/>
            <NavBarItem text='News'/>
        </ul>
        </div>
        
    </header>
  )
}

function NavBarItem({text}) {

  return (
    <li className='cursor-pointer flex flex-col gap-1 items-center' >
      <p className="">{text}</p>
    </li>
  )
}
export default Header