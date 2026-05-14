interface StatCardProps {
  icon: React.ReactNode
  label: string
  value: string
}

export default function StatCard({ icon, label, value }: StatCardProps) {
  return (
    <div className='flex items-center gap-4 p-4 border border-neutral-200 rounded-lg bg-white w-full'>
      <div className='text-3xl rounded-xl'>{icon}</div>
      <div>
        <p className='text-sm text-neutral-600'>{label}</p>
        <p className='text-xl font-semibold'>{value}</p>
      </div>
    </div>
  )
}