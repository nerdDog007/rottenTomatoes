import React from 'react'
import Button from '../components/Button'



function Footer() {
    const j =["Privacy Policy","Terms of Service","Contact Us"]
  return (
    <footer className='w-full h-[20vh] bg-gray-800 py-2 text-white flex gap-8  flex-col items-center'>
        <div className='w-full flex flex-col items-center gap-4'>
            <p className='text-[.6rem]'>Copyright © Sandesh. All rights reserved</p>
            <Button text={"Join The Newsletter"} className='bg-green-500 font-semibold text-white p-2 rounded-md'/>
        </div>
        <ul className='flex gap-4'>
            {
                j.map((item,index)=>{
                    return <ListItem key={index} text={item}/>
                })
            }
        </ul>
    </footer>
  )
}

function ListItem({text}){
    return (
        <li className=''>
            {text}
        </li>
    )
}

export default Footer