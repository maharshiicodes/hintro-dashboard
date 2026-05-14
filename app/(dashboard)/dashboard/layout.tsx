'use client'
import{ mockServer } from '@/app/src/lib/api'
import SideBar from '@/app/src/ui/components/SideBar'
import TopBar from '@/app/src/ui/components/TopBar'
import { useState } from 'react';

export default  function Home({children} : {children : React.ReactNode}) {
  const [isOpen , setIsOpen] = useState<boolean>(false);
  return (
    <div className='flex h-screen w-full overflow-hidden'>
     
      <SideBar isOpen = {isOpen} setIsOpen = {setIsOpen} />
      <div className='flex flex-col flex-1 min-w-0'>
        <TopBar setIsOpen = {setIsOpen} />
        <main className='flex-1 overflow-y-auto md:px-20 md:py-8'>
          {children}
        </main>
      </div>
    </div>
  )
}