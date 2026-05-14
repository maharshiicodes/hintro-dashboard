'use client'
import { FaPlay } from "react-icons/fa";
import profile from '@/public/assests/profile.jpg'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import Image from 'next/image';
import LogoutModal from '@/app/src/ui/components/LogOutModal';
import { MdOutlineLogout } from "react-icons/md";

interface TopBarProps {
  setIsOpen: (isOpen: boolean) => void
  title?: string
}

export default function TopBar({ setIsOpen, title = "Dashboard" }: TopBarProps) {
  const [showDropdown, setShowDropdown] = useState(false)
  const [showLogoutModal, setShowLogoutModal] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLogoutClick = () => {
    setShowDropdown(false)
    setShowLogoutModal(true)
  }

  return (
    <>
      <div className='text-background flex items-center justify-between h-18 w-full px-4 border-b-2 border-neutral-200'>
        <div className='md:hidden'>
          <RxHamburgerMenu 
            size={24} 
            className='text-primary cursor-pointer' 
            onClick={() => setIsOpen(true)} 
          />
        </div>
        <h1 className='text-2xl text-primary ml-4 font-semibold'>{title}</h1>
        <div className='flex items-center justify-center gap-10 mr-0 md:mr-10'>
          <div className='hidden md:w-40 md:h-10 bg-transparent rounded-md border border-black md:flex items-center justify-center cursor-pointer gap-4'>
            <FaPlay size={16} className='text-primary' />
            <h1 className='text-primary text-sm font-bold'>Watch Tutorial</h1>
          </div>

         
          <div className='relative' ref={dropdownRef}>
            <div
              className='flex items-center justify-center gap-2 cursor-pointer'
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <div className='h-12 w-12 rounded-full bg-transparent'>
                <img src={profile.src} alt="Profile" className='object-cover w-12 h-12 rounded-full' />
              </div>
              <MdKeyboardArrowDown 
                size={20} 
                className='hidden md:block text-primary cursor-pointer rounded-full transition-colors duration-300 ease-in-out hover:bg-neutral-100'
              />
            </div>

           
            {showDropdown && (
              <div className='absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-40 '>
                <button
                  onClick={handleLogoutClick}
                  className='w-30 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-left font-medium cursor-pointer flex items-center justify-center gap-5'
                >
                    <MdOutlineLogout size={18} className='text-gray-700' />
                  Log out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

    
      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
      />
    </>
  )
}