import * as Icons from 'lucide-react'

export default function Icon({ name, className = 'h-5 w-5', strokeWidth = 1.8 }) {
  const LucideIcon = Icons[name]
  if (!LucideIcon) return null
  return <LucideIcon className={className} strokeWidth={strokeWidth} />
}
