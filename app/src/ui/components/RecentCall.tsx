'use client'

import { useState } from 'react'
import CallRow from './CallRow'
import EmptyState from './EmptyState'
import { MdCalendarToday } from 'react-icons/md'
import { CallSession, Pagination } from '@/app/src/lib/types'

interface RecentCallsProps {
  initialCalls: CallSession[]
  initialPagination: Pagination
}

export default function RecentCalls({
  initialCalls,
  initialPagination
}: RecentCallsProps) {
  const [calls, setCalls] = useState<CallSession[]>(initialCalls)
  const [pagination, setPagination] = useState(initialPagination)
  const [isLoading, setIsLoading] = useState(false)

 
  const groupedCalls = calls.reduce(
    (acc, call) => {
      const date = new Date(call.started_at)
      const dateKey = date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      })

      if (!acc[dateKey]) {
        acc[dateKey] = []
      }
      acc[dateKey].push(call)
      return acc
    },
    {} as Record<string, CallSession[]>
  )

  const handleLoadMore = async () => {
    if (!pagination.hasNextPage || isLoading) return

    setIsLoading(true)
    try {
      const response = await fetch(
        `https://mock-backend-hintro.vercel.app/api/call-sessions?limit=${pagination.limit}&page=${pagination.page + 1}`,
        {
          headers: {
            'x-user-id': 'u1'
          }
        }
      )
      const data = await response.json()
      setCalls([...calls, ...data.callSessions])
      setPagination(data.pagination)
    } catch (error) {
      console.error('Failed to load more calls:', error)
    } finally {
      setIsLoading(false)
    }
  }
  if (calls.length === 0) {
    return (
      <div>
        <h2 className='text-lg font-semibold mb-6 text-center mx-auto'>Recent calls</h2>
        <EmptyState
          icon={<MdCalendarToday />}
          title='No Recent Calls'
          description='Connect your Google Calendar to see upcoming meetings, get reminders, and get smart notes directly from Hintro'
          ctaText='Start a call'
        />
      </div>
    )
  }
  return (
    <div className = 'w-full'>
      <h2 className='text-lg font-semibold text-center'>Recent calls</h2>
      <div className='space-y-6'>
        {Object.entries(groupedCalls).map(([date, dateCalls]) => (
          <div key={date}>
            <h3 className='text-xs font-semibold text-gray-500 uppercase mb-3'>
              {date}
            </h3>
            <div className='bg-white rounded-lg'>
              {dateCalls.map((call) => (
                <CallRow
                  key={call._id}
                  clientName={call.client}
                  description={call.description}
                  time={new Date(call.started_at).toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                  avatar={call.client.charAt(0)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {pagination.hasNextPage && (
        <div className='flex justify-center mt-8'>
          <button
            onClick={handleLoadMore}
            disabled={isLoading}
            className='px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
          >
            {isLoading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </div>
  )
}