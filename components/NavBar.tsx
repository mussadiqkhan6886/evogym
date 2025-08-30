'use client';

import Image from 'next/image'
import React, { SetStateAction, useState } from 'react'
import Logo from "../public/Logo.png"
import Button from './Button'
import ActionButton from './ActionButton'
import menu from "../public/Circles.png"
import Navigation from './Navigation';

interface Props{
    selectedPage: string
    setSelectedPage: React.Dispatch<SetStateAction<string>>
}

const NavBar = ({selectedPage, setSelectedPage} : Props) => {

    const [showMenu, setShowMenu] = useState<boolean>(false)

    const handleClick = () => {
        setShowMenu(prev => !prev)
    }

  return (
    <nav className='py-4 flex between'>
        <div className='md:w-1/5 w-full mr-3'>
            <h1>
                <Image src={Logo} alt='logo image' width={120} height={100}  />
            </h1>
        </div>
        <div className='md:flex hidden between  w-full text-gray-500'>
            <div>
                <ul className='between flex gap-5 text-sm'>
                   <Navigation selectedPage={selectedPage} />
                </ul>
            </div>
            <div className='flex gap-5 text-sm'>
                <Button text={"Sign In"} />
                <ActionButton text={"Become a Member"} />
            </div>
        </div>
        <div className='block z-50 md:hidden bg-black rounded-full '>
            <Image onClick={handleClick} className='cursor-pointer' src={menu} alt='menu Logo hamburger' width={30} height={30} />
        {showMenu && (
            <div className='fixed z-50 right-0 px-10 top-0 w-full bg-primary-100 text-gray-500 text-lg'>
                <button className='w-8 h-8 bg-primary-300 rounded-full absolute right-10 top-4 cursor-pointer hover:text-primary-100 transition-all duration-500' onClick={handleClick}>X</button>
                <div>
                    <ul className='between mt-15 mb-2 flex gap-5 text-xl'>
                        <Navigation selectedPage={selectedPage} />
                    </ul>
                </div>
            </div>
        )}
        </div>
    </nav>
  )
}

export default NavBar