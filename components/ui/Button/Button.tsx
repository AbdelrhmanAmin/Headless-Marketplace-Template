import cn from 'classnames'
import React from 'react'
import s from './Button.module.css'

interface IButton {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary'
  size?: 'large' | 'medium' | 'small' | 'tiny'
  shape?: 'circle' | 'block'
}

const Button = ({
  children,
  className,
  size = 'large',
  variant = 'primary',
  shape = 'block',
}: IButton) => {
  const rootClass = cn(
    s.root,
    variant && [s[variant]],
    size && [s[size]],
    shape && [s[shape]],
    className
  )
  return <button className={rootClass}>{children}</button>
}

export default Button
