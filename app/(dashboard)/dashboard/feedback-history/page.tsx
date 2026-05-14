'use client'

import { useEffect, useState } from 'react'
import { FeedbackEntry } from '@/app/src/lib/types'
import { FaStar } from 'react-icons/fa'
import FeedbackModal from '@/app/src/ui/components/FeedBackModal'

export default function FeedbackHistoryPage() {
  const [feedbacks, setFeedbacks] = useState<FeedbackEntry[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    try {
      const storedFeedback = JSON.parse(
        localStorage.getItem('feedback') || '[]'
      )
      setFeedbacks(storedFeedback)
    } catch (error) {
      console.error('Failed to load feedback:', error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const tableContent = feedbacks.length === 0 ? (
    <tr>
      <td colSpan={5} className='px-6 py-12 text-center'>
        <p className='text-gray-500 text-sm'>No feedbacks yet</p>
        <button className='mt-2 bg-white text-black border border-gray-300 py-2 px-4 rounded cursor-pointer' onClick={() => setIsOpen(true)}>
          Give Feedback
        </button>
      </td>
    </tr>
  ) : (
    feedbacks.map((feedback) => (
      <tr
        key={feedback.id}
        className='border-b border-gray-100 hover:bg-gray-50'
      >
        <td className='px-6 py-4 text-sm font-medium text-gray-900'>
          Feedback Title
        </td>
        <td className='px-6 py-4'>
          <div className='flex gap-1'>
            {feedback.rating}/5
          </div>
        </td>
        <td className='px-6 py-4 text-sm text-gray-600 max-w-xs truncate'>
          {feedback.text || '-'}
        </td>
        <td className='px-6 py-4 text-sm text-gray-600'>{feedback.date}</td>
        <td className='px-6 py-4 text-sm text-gray-600'>{feedback.time}</td>
      </tr>
    ))
  )

  const mobileContent = feedbacks.length === 0 ? (
  <div className='text-center py-12'>
    <p className='text-gray-500 text-sm'>No feedbacks yet</p>
  </div>
) : (
  feedbacks.map((feedback) => (
    <div
      key={feedback.id}
      className='bg-white rounded-lg border border-gray-200 p-4 mx-4 space-y-2'
    >
      <div className='flex items-start justify-between gap-3'>
        <div className='flex-1'>
          <h3 className='font-semibold text-sm text-gray-900'>Feedback Title</h3>
          <p className='text-xs text-gray-600 line-clamp-2 mt-1'>
            {feedback.text ? `Had issues understanding ${feedback.text}...` : 'Had issues understanding boxy contro...'}
          </p>
        </div>
        <div className='flex gap-0.5 flex-shrink-0'>
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              size={12}
              className={
                i < feedback.rating ? 'text-yellow-400' : 'text-gray-300'
              }
            />
          ))}
        </div>
      </div>

      <div className='text-xs text-gray-500'>
        <p><span className = "text-blue-500">{feedback.date}</span> · {feedback.time}</p>
      </div>
    </div>
  ))
)

  return (
    <div className='space-y-6'>
      <div>
        <p className='text-md text-gray-600 mt-4 ml-6'>
          Review your previous feedbacks
        </p>
      </div>

      {isOpen && (
        <FeedbackModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}

      <div className='hidden md:block bg-white rounded-lg border border-gray-200 overflow-hidden'>
        <table className='w-full'>
          <thead className='bg-gray-50 border-b border-gray-200'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-semibold text-gray-700'>
                Title
              </th>
              <th className='px-6 py-3 text-left text-xs font-semibold text-gray-700'>
                Rating
              </th>
              <th className='px-6 py-3 text-left text-xs font-semibold text-gray-700'>
                Description
              </th>
              <th className='px-6 py-3 text-left text-xs font-semibold text-gray-700'>
                Date
              </th>
              <th className='px-6 py-3 text-left text-xs font-semibold text-gray-700'>
                Time
              </th>
            </tr>
          </thead>
          <tbody>{tableContent}</tbody>
        </table>
      </div>

      <div className='md:hidden space-y-3'>{mobileContent}</div>
    </div>
  )
}