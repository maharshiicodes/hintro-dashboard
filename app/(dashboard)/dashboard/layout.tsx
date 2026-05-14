'use client'
import{ mockServer } from '@/app/src/lib/api'
import SideBar from '@/app/src/ui/components/SideBar'
import TopBar from '@/app/src/ui/components/TopBar'
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Analytics } from '@vercel/analytics/next';

export default  function Home({children} : {children : React.ReactNode}) {
  const [isOpen , setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const getPageTitle = () => {
    if (pathname === '/dashboard') return 'Dashboard'
    if (pathname === '/dashboard/feedback-history') return 'Feedback History'
    return 'Dashboard'
  }

  return (
    <div className='flex h-screen w-full overflow-hidden'>
      <Analytics />
      <SideBar isOpen = {isOpen} setIsOpen = {setIsOpen} />
      <div className='flex flex-col flex-1 min-w-0'>
        <TopBar setIsOpen = {setIsOpen} title = {getPageTitle()} />
        <main className='flex-1 overflow-y-auto md:px-20 md:py-8'>
          {children}
        </main>
      </div>
    </div>
  )
}