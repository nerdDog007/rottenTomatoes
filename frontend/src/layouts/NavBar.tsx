import React from 'react'
import { RiCompassDiscoverLine } from "react-icons/ri";
import { MdLocalMovies } from "react-icons/md";
import { FaTv } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoDocumentText } from "react-icons/io5";

function NavBar() {
  return (
    <nav className='w-screen shadow-2xl h-[10vh]  bottom-0 bg-gray-800 flex justify-center items-center'>
        <ul className='flex text-white items-center w-full justify-between px-4 text-[1rem] md:justify-center md:gap-12 sm:text-[1.6rem] py-4 '>
            <NavBarItem Icons={RiCompassDiscoverLine} text='Discover'/>
            <NavBarItem Icons={MdLocalMovies} text='Movies'/>
            <NavBarItem Icons={FaTv} text='TV'/>
            <NavBarItem Icons={IoDocumentText} text='Guide'/>
            <NavBarItem Icons={CgProfile} text='Profile'/>
        </ul>
    </nav>
  )
}

function NavBarItem({Icons,text}) {
  return (
    <li className='cursor-pointer flex flex-col gap-1 items-center'>
      <Icons className=' font-medium' />
      <p>{text}</p>
    </li>
  )
}

export default NavBar;
