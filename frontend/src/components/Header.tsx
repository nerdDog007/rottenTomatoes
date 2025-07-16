import logo from '../assets/logo.png'
import Input from './Input'
function Header() {
  return (
    <header className='bg-red-500  md:h-[10vh]  flex items-center justify-between'>
        <img src={logo} alt="logo" className='w-[25%] pl-4'/>
        <Input type='search' className='w-[60%] mr-4 md:w-[50%] lg:w-[40%] bg-gray-900 outline-0 border-2 px-2 py-1 text-white rounded-4xl' placeholder='Search'/>
    </header>
  )
}

export default Header