import React from 'react'
import cn from 'classnames'
import s from './Container.module.css'

interface IContainer {
  children: React.ReactNode
  className?: string
  hasPaddingX?: true
  hasPaddingY?: true
}

const Container = ({
  children,
  className,
  hasPaddingX,
  hasPaddingY,
}: IContainer) => {
  const rootClass = cn(
    s.root,
    className,
    { [s.paddingX]: hasPaddingX },
    { [s.paddingY]: hasPaddingY }
  )
  return <div className={rootClass}>{children}</div>
}

export default Container
