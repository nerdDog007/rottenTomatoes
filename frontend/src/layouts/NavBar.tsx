import { RiCompassDiscoverLine } from "react-icons/ri";
import { MdLocalMovies } from "react-icons/md";
import { FaTv } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoDocumentText } from "react-icons/io5";
import { setModal } from "../redux/slices/auth";
import { useDispatch } from "react-redux";


function NavBar() {
  const dispatch = useDispatch()
  return (
    <nav className='w-screen  shadow-2xl h-[10vh] z-10 fixed p-2 lg:hidden bottom-0 bg-white flex justify-center items-center'>
        <ul className='flex text-black items-center w-full justify-center gap-6   md:justify-center md:gap-12 text-[1.3rem]  '>
            <NavBarItem Icons={RiCompassDiscoverLine} text='Discover'/>
            <NavBarItem Icons={MdLocalMovies} text='Movies'/>
            <NavBarItem Icons={FaTv} text='TV'/>
            <NavBarItem Icons={IoDocumentText} text='Guide'/>
            <NavBarItem Icons={CgProfile} text='Profile' onClick={()=>dispatch(setModal(true))}/>
        </ul>
    </nav>
  )
}

function NavBarItem({Icons,text,onClick}) {

  return (
    <li className='cursor-pointer flex flex-col gap-1 items-center'onClick={onClick} >
      <Icons className=' font-[300]' />
      <p className="font-[300]">{text}</p>
    </li>
  )
}

export default NavBar;
