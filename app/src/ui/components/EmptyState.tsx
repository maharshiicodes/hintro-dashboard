interface EmptyStateProps {
  icon?: React.ReactNode
  title: string
  description: string
  ctaText: string
  onCta?: () => void
}

export default function EmptyState({
  icon,
  title,
  description,
  ctaText,
  onCta
}: EmptyStateProps) {
  return (
    <div className='flex flex-col items-center justify-center py-16 px-4'>
      {icon && <div className='text-4xl mb-4 text-blue-400 bg-blue-200 w-12 h-12 rounded-lg flex items-center justify-center'>{icon}</div>}
      <h3 className='text-lg font-semibold text-gray-900 mb-2'>{title}</h3>
      <p className='text-sm text-gray-500 text-center mb-6 max-w-sm'>
        {description}
      </p>
      <button
        onClick={onCta}
        className='px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer'
      >
        {ctaText}
      </button>
    </div>
  )
}