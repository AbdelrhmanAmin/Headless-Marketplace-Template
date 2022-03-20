import cn from 'classnames'
import React from 'react'
import s from './Skeleton.module.css'

interface ISkeleton {
  className?: string
  // variant?: string
}

const Skeleton = ({ className }: ISkeleton) => {
  return <div className={cn(s.skeleton, className)} />
}

export default Skeleton
