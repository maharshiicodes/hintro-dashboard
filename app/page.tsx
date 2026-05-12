import{ mockServer } from '@/app/src/lib/api'
import SideBar from '@/app/src/ui/components/SideBar'
import TopBar from '@/app/src/ui/components/TopBar'

export default async function Home(){
 
  return (
    <div className = 'relative min-h-screen w-full'>
      <div className = 'absolute left-60 top-0'>
      <TopBar />
      </div>
      <div className = 'absolute top-0 left-0'>
      <SideBar />
      </div>
    </div>
  )
}