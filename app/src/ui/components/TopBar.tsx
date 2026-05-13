'use client'
import { FaPlay } from "react-icons/fa";
import profile from '@/public/assests/profile.jpg'
import { RxHamburgerMenu , RxCross1 } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState} from "react";
import Image  from 'next/image';
import SideBar from "./SideBar";


export default function TopBar({setIsOpen} : {setIsOpen : (isOpen : boolean) => void}){
    return(
        <div className = 'text-background flex items-center justify-between h-18 w-full px-4 border-b-2 border-neutral-200'>
            <div className = 'md:hidden'>
                <RxHamburgerMenu size={24} className = 'text-primary cursor-pointer' onClick={() => setIsOpen(true)} />
            </div>
            <h1 className = 'text-2xl text-primary ml-4 font-semibold'>Dashboard</h1>
            <div className = 'flex items-center justify-center gap-10 mr-0 md:mr-10'>
                <div className = 'hidden md:w-40 md:h-10 bg-transparent rounded-md border border-black md:flex items-center justify-center cursor-pointer gap-4'>
                    <FaPlay size={16} className = 'text-primary '/>
                    <h1 className = 'text-primary text-sm font-bold'>Watch Tutorial</h1>
                </div>
                <div className = 'flex items-center justify-center gap-2'>
                <div className = 'h-12 w-12 rounded-full bg-transparent'>
                 <img src={profile.src} alt="Profile"  className = 'object-cover w-12 h-12 rounded-full' />
                </div>
                  <MdKeyboardArrowDown size={20} className = 'hidden md:block text-primary cursor-pointer rounded-full transition-colors duration-300 ease-in-out hover:bg-neutral-100' />
                </div>
            </div>
        </div>
    )
}