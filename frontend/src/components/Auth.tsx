import React, { useEffect } from 'react'
import img from '../assets/logo.png'
import Input from './Input'
import Button from './Button'
import { useDispatch,useSelector } from 'react-redux';
import { setEmail,setPassword,setIsLoading,setError,setDisable,setModal,setLogged } from '../redux/slices/auth';
import { FaGoogle } from "react-icons/fa";

const Auth = () => {
    const dispatch = useDispatch()
    const {email,disable,modal,password,error} = useSelector(state=>state.auth)
    console.log(error)
    const handleChange = (e)=>{
        console.log(e.target.type)
        if(e.target.type==='email')
            dispatch(setEmail(e.target.value))
        else if(e.target.type==='password')
            dispatch(setPassword(e.target.value))
    }
    function onSubmit(){
        fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password })
          })
        .then(res=>res.json())
        .then(data=>{
            if(data.validation){
                dispatch(setLogged(true))
                dispatch(setModal(false))
            }
            else{
                dispatch(setError('Invalid Email or Password'))
            }
        })
        .catch(err=>{
            console.log(err)
        })

    }


    useEffect(() => {
        if (email.length > 5) {
            dispatch(setDisable(false));
        } else {
            dispatch(setDisable(true));
        }
    }, [email, dispatch]);
  return (
    <div className={`w-[100vw] fixed z-50 h-[100vh] ${modal===false?"hidden":"block"} overflow-hidden gap-8  bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center`}>
        <div className="w-full text-white h-[15%] relative bg-red-800 flex flex-col gap-4 items-center justify-center">
            <img src={img} alt="logo" className='w-[30%]'/>
            <p className='text-[.9rem] font-semibold'>Your guide to what’s Fresh and Rotten</p>
            <p className='absolute top-0 right-0 p-4 text-[1.5rem] font-bold text-center' onClick={()=>dispatch(setModal(false))}>X</p>
        </div>
        <div className='flex flex-col w-[80vw] gap-4 items-center justify-center'>
            <Input type={'email'} placeholder={'Email'} value={email} onChange={handleChange}  className='w-full p-4  md:w-[50%] lg:w-[40%] border-gray-800 outline-0 border-2 px-2 py-1 text-black rounded-4xl'/>
            <Input type={'password'} placeholder={'Password'} value={password} onChange={handleChange}  className='w-full p-4 md:w-[50%] lg:w-[40%] border-gray-800 outline-0 border-2 px-2 py-1 text-black rounded-4xl'/>
            <button  className='bg-gray-400 px-4 py-1 w-full rounded-2xl text-white cursor-pointer' disabled={disable} onClick={onSubmit}>
            Continue
            </button>
            <p className='text-center text-red-800'>{error}</p>
        </div>
        <p className='text-[.7rem] font-semibold border-l-2 border-r-2 px-4 '>Or Continue with</p>
        <div className='flex  items-center border-2 px-4 py-1 rounded-4xl text-[1rem]'>
            <FaGoogle className='text-black  mr-2'/>
            <button  className='text-black  w-full rounded-2xl  cursor-pointer ' > 
            Continue with Google
            </button>
        </div>
        <p className='text-center px-8 text-[.7rem]'>By continuing, you agree to the Terms and Policies and the Privacy Policy and to receive email from Fandango Media Brands.</p>
    </div>
  )
}

export default Auth
