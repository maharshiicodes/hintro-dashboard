import { GiPieChart } from "react-icons/gi";
import { FaRegClock } from "react-icons/fa";
import { IoSparklesSharp } from "react-icons/io5";
import { IoCalendar } from "react-icons/io5";
import StatCard from "@/app/src/ui/components/StatCard";
import { mockServer } from "@/app/src/lib/api";
import type { DashboardStats,CallSessionsResponse } from "@/app/src/lib/types";
import RecentCalls from "@/app/src/ui/components/RecentCall";

export default async  function Dashboard(){
    const data : DashboardStats = await mockServer('auth/dashboard','u2');
    const callsData: CallSessionsResponse = await mockServer(
    'call-sessions?limit=100',
    'u2'
  )
  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    if (hours > 0) return `${hours}h ${mins}m`
    return `${mins}m`
  }
  const formatLastSession = (dates: string[]) => {
    if (dates.length === 0) return '-'
    const lastDate = new Date(dates[0])
    const now = new Date()
    const diffMs = now.getTime() - lastDate.getTime()
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
    if (diffDays === 0) return 'Today'
    if (diffDays === 1) return '1 day ago'
    return `${diffDays} days ago`
  }
    return(
       <div className = 'flex flex-col items-start justify-start gap-6 py-4 px-2 bg-color-background text-color-primary h-screen w-full'>
        <div className = 'flex flex-col items-start justify-start gap-6 md:flex-row md:justify-between w-full'>
           <div className = 'flex flex-col items-start justify-start gap-2'>
                <h1 className = 'text-xl md:text-3xl font-bold text-primary max-w-lg'>Hi, {data.user.firstName} 👋 Welcome to Hintro </h1>
                <p className = 'text-sm md:text-lg text-primary/80'>Ready to make your next call smarter?</p>
           </div>
           <button className = 'bg-primary text-white rounded-md cursor-pointer w-25 md:w-50 h-10 md:15'>
              Start Call
           </button>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4  gap-4 md:gap-10 w-full'>
        <StatCard
          icon={<GiPieChart className='bg-red-300 text-red-400 rounded-xl w10 h-10' size = {35}/>}
          label='Total Sessions'
          value={data.usage.kb_files.used.toString()}
        />
        <StatCard
          icon={<FaRegClock className='bg-blue-300 text-blue-400 rounded-xl w10 h-10' size = {35}/>}
          label='Average Duration'
          value='14m 22sec'
        />
        <StatCard
          icon={<IoSparklesSharp className='bg-green-300 text-green-400 rounded-xl w10 h-10' size = {35}/>}
          label='AI Used'
          value={data.usage.vocab_terms.toString()}
        />
        <StatCard
          icon={<IoCalendar className='bg-purple-300 text-purple-400 rounded-xl w10 h-10' size = {35}/>}
          label='Last Session'
          value='2 days ago'
        />
       </div>
       <div className = 'mx-auto w-full max-w-2xl'>
       <RecentCalls
        initialCalls={callsData.callSessions}
        initialPagination={callsData.pagination}
      />
      </div>
      </div> 
    )
}