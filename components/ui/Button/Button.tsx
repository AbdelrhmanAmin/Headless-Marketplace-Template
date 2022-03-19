import cn from 'classnames'
import React from 'react'
import s from './Button.module.css'

interface IButton {
  children: React.ReactNode
  className?: string
  variant?: 'primary'
  size?: 'large'
}

const Button = ({
  children,
  className,
  size = 'large',
  variant = 'primary',
}: IButton) => {
  const rootClass = cn(
    s.root,
    variant && [s[variant]],
    size && [s[size]],
    className
  )
  return (
    <button className={rootClass}>
      {children}
    </button>
  )
}

export default Button
