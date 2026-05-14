import { MdMoreVert } from 'react-icons/md'

interface CallRowProps {
  clientName: string
  description: string
  time: string
  avatar: string
}

export default function CallRow({
  clientName,
  description,
  time,
  avatar
}: CallRowProps) {
  return (
    <div className='flex items-center justify-between py-4  w-full'>
      <div className='flex items-center gap-3 flex-1'>
        <div className='flex-shrink-0'>
          <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold text-sm'>
            {avatar}
          </div>
        </div>
        <div className='flex-1 min-w-0'>
          <h4 className='text-sm font-semibold text-gray-900'>{clientName}</h4>
          <p className='text-xs text-gray-500'>{description}</p>
        </div>
      </div>
      <div className='flex items-center gap-4 ml-4'>
        <span className='text-sm text-gray-600 whitespace-nowrap'>{time}</span>
        <button className='p-1 hover:bg-gray-100 rounded transition-colors'>
          <MdMoreVert size={18} className='text-gray-400' />
        </button>
      </div>
    </div>
  )
}