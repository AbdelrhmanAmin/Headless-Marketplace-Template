import cn from 'classnames'
import React from 'react'
import s from './Badge.module.css'

interface IBadge {
  children: React.ReactNode | string
  variant: string
  size: string
  className?: string
}

const Badge = ({ children, variant, size, className }: IBadge) => {
  const rootClass = cn(
    s.root,
    className,
    variant && s[variant],
    size && s[size]
  )
  return <div className={rootClass}>{children}</div>
}

export default Badge
