import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Button({
  children,
  variant = 'primary',
  icon = true,
  as = 'button',
  href,
  className = '',
  ...props
}) {
  const base = variant === 'primary' ? 'btn-primary group' : 'btn-secondary group'
  const Comp = as === 'a' ? motion.a : motion.button

  return (
    <Comp
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${className} relative overflow-hidden`}
      {...props}
    >
      {/* Optional: Add a subtle overlay hover effect for extra depth if needed, controlled via CSS or here */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <ArrowRight 
            className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" 
            strokeWidth={2.5} 
          />
        )}
      </span>
    </Comp>
  )
}