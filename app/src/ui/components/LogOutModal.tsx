'use client'
import {redirect} from 'next/navigation'
import { MdClose } from 'react-icons/md'

interface LogoutModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LogoutModal({ isOpen, onClose }: LogoutModalProps) {
  if (!isOpen) return null

  const handleLogout = () => {
    redirect('/login')
    console.log('User logged out')
    onClose()
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 cursor-pointer' onClick={onClose}>
      <div className='w-full max-w-sm bg-white rounded-lg shadow-lg'>
       
        <div className='flex items-center justify-between p-6 '>
          <h2 className='text-lg font-semibold text-gray-900'>Leaving already?</h2>
          <button
            onClick={onClose}
            className='p-1 hover:bg-gray-100 rounded transition-colors'
          >
            <MdClose size={20} />
          </button>
        </div>

      
        <div className='p-6'>
          <p className='text-sm text-gray-600'>
            You can log back in anytime to continue your meetings with Hintro.
          </p>
        </div>

       
        <div className='flex items-center justify-end gap-3 p-6'>
          <button
            onClick={onClose}
            className='px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer'
          >
            Cancel
          </button>
          <button
            onClick={handleLogout}
            className='px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-900 transition-colors cursor-pointer'
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  )
}