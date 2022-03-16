import React from 'react'
import cn from 'classnames'
import s from './Stack.module.css'

interface StackProps {
  component?: string | React.JSXElementConstructor<any>
  children: React.ReactNode
  className?: string
}

const Stack = ({
  component: Component = 'div',
  children,
  className,
  ...rest
}: StackProps) => {
  const rootClass = cn('w-full flex flex-col', className)

  return (
    <Component className={rootClass} {...rest}>
      {children}
    </Component>
  )
}

export default Stack
