'use client'

import { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { FaRegStar, FaStar } from 'react-icons/fa'

interface FeedbackModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function FeedbackModal({ isOpen, onClose }: FeedbackModalProps) {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [text, setText] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async () => {
    if (rating === 0) {
      alert('Please select a rating')
      return
    }

    setIsSubmitting(true)

    try {
      const feedbackEntry = {
        id: Date.now().toString(),
        rating,
        text,
        date: new Date().toLocaleDateString('en-US', {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        }),
        time: new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit'
        })
      }

      const existingFeedback = JSON.parse(localStorage.getItem('feedback') || '[]')
      existingFeedback.push(feedbackEntry)
      localStorage.setItem('feedback', JSON.stringify(existingFeedback))
      setRating(0)
      setText('')
      onClose()
    } catch (error) {
      console.error('Failed to submit feedback:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const shouldShowTextField = rating > 0

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'>
      <div className='w-full max-w-md bg-white rounded-lg shadow-lg'>
        <div className='flex items-center justify-between p-6 border-b border-gray-200'>
          <h2 className='text-lg font-semibold text-gray-900'>Give Feedback</h2>
          <button
            onClick={onClose}
            className='p-1 hover:bg-gray-100 rounded transition-colors'
          >
            <MdClose size={20} />
          </button>
        </div>

        <div className='p-6 space-y-6'>
          <p className='text-sm text-gray-600'>
            Describe your experience using Hintro.
          </p>

          
          <div className='flex items-center justify-center gap-3'>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setRating(star)}
              >
                {star <= (hoverRating || rating) ? (
                  <FaStar size={32} className='text-yellow-400' />
                ) : (
                  <FaRegStar size={32} className='text-gray-300' />
                )}
              </button>
            ))}
          </div>

        
          {shouldShowTextField && (
            <div className='space-y-2'>
              <label className='text-sm font-medium text-gray-900'>
                {rating <= 3
                  ? 'What frustrated you or felt confusing?'
                  : 'What did you like the most?'}
              </label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Tell us more...'
                className='w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none'
                rows={4}
              />
            </div>
          )}
        </div>

        <div className='flex items-center justify-between p-6 border-t border-gray-200'>
          <button
            onClick={onClose}
            className='px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors'
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting || rating === 0}
            className='px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  )
}